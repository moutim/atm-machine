using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Requests;
using atm.Enums;
using Microsoft.EntityFrameworkCore;
using System.Runtime.ConstrainedExecution;

namespace atm.Services
{
    public class TransferService
    {
        private readonly DataContext _context;
        private readonly StatementService _statementService;

        public TransferService(DataContext context, StatementService statementService)
        {
            _context = context;
            _statementService = statementService;
        }

        public async Task<bool> Transfer(TransferDTO transferInfo)
        {
            User? userOrigin = await _context.Users
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.CPF == transferInfo.CpfOrigin);
            int userOriginCurrentBalance = userOrigin.CurrentAccounts.Sum(ca => ca.Balance);

            if (userOriginCurrentBalance < transferInfo.Amount)
            {
                return false;
            }

            User? userDestination = await _context.Users
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.CPF == transferInfo.CpfDestination);

            // Atualiza o saldo da conta de origem
            CurrentAccount? originAccount = userOrigin.CurrentAccounts.FirstOrDefault();
            originAccount.Balance -= transferInfo.Amount;

            // Atualiza o saldo da conta de destino
            CurrentAccount destinationAccount = userDestination.CurrentAccounts.FirstOrDefault();
            destinationAccount.Balance += transferInfo.Amount;

            // Cria extrato para a conta de origem
            await _statementService.CreateStatement(
                (int)TransactionTypes.Transfer,
                transferInfo.Amount,
                userOrigin.UserId,
                (int)AddOrRemoved.Removed
            );

            // Cria a transação para a conta de destino
            await _statementService.CreateStatement(
                (int)TransactionTypes.Transfer,
                transferInfo.Amount,
                userDestination.UserId,
                (int)AddOrRemoved.Add
            );

            // Salva as alterações no banco de dados
            await _context.SaveChangesAsync();

            return true;
        }

    }
}

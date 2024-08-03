using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Requests;
using atm.Enums;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class DepositService
    {
        private readonly DataContext _context;
        private readonly StatementService _statementService;

        public DepositService(DataContext datacontext, StatementService statementService)
        {
            _context = datacontext;
            _statementService = statementService;
        }

        public async Task<bool> Deposit(DepositDTO depositInfo)
        {
            User? user = await _context.Users
                 .Include(u => u.CurrentAccounts)
                 .FirstOrDefaultAsync(u => u.CPF == depositInfo.CPF);

            int userCurrentBalance = user.CurrentAccounts.Sum(ca => ca.Balance);

            CurrentAccount? currentAccount = user.CurrentAccounts.FirstOrDefault();

            currentAccount.Balance += depositInfo.Amount;

            await _statementService.CreateStatement(
                (int)TransactionTypes.Deposit,
                depositInfo.Amount,
                user.UserId,
                (int)AddOrRemoved.Add
            );

            await _context.SaveChangesAsync();

            return true;
        }
    }
}

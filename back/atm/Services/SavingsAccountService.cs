using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Requests;
using atm.Enums;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class SavingsAccountService
    {
        private readonly DataContext _context;
        private readonly StatementService _statementService;

        public SavingsAccountService(DataContext context, StatementService statementService)
        {
            _context = context;
            _statementService = statementService;
        }

        public async Task<bool> Deposit(SavingsAccountDTO savingsInfo)
        {
            User? user = await _context.Users
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.CPF == savingsInfo.CPF);

            SavingAccount? userAccount = user.SavingAccounts.FirstOrDefault();

            int accountBalance = user.SavingAccounts.Sum(ca => ca.Balance);

            accountBalance += savingsInfo.Amount;

            await _statementService.CreateStatement(
                (int)TransactionTypes.SavingsDeposit,
                savingsInfo.Amount,
                user.UserId,
                (int)AddOrRemoved.Add
            );

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Withdraw(SavingsAccountDTO savingsInfo)
        {
            User? user = await _context.Users
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.CPF == savingsInfo.CPF);

            SavingAccount? userAccount = user.SavingAccounts.FirstOrDefault();

            int accountBalance = user.SavingAccounts.Sum(ca => ca.Balance);

            if (accountBalance <  savingsInfo.Amount)
            {
                return false;
            }

            accountBalance -= savingsInfo.Amount;

            await _statementService.CreateStatement(
                (int)TransactionTypes.SavingsWithdrawal,
                savingsInfo.Amount,
                user.UserId,
                (int)AddOrRemoved.Removed
            );

            await _context.SaveChangesAsync();

            return true;
        }
    }
}

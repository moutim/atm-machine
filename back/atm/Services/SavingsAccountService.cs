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
                .Include(u => u.SavingAccounts)
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.CPF == savingsInfo.CPF);
            
            SavingAccount? userSavingsAccount = user.SavingAccounts.FirstOrDefault();
            CurrentAccount? userCurrentAccount = user.CurrentAccounts.FirstOrDefault();
            long savingsAccountBalance = user.SavingAccounts.Sum(ca => ca.Balance);
            long currentAccountBalance = user.CurrentAccounts.Sum(ca => ca.Balance);

            if (currentAccountBalance <  savingsInfo.Amount)
            {
                return false;
            }

            userSavingsAccount.Balance += savingsInfo.Amount;
            userCurrentAccount.Balance -= savingsInfo.Amount;

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
                .Include(u => u.SavingAccounts)
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.CPF == savingsInfo.CPF);

            SavingAccount? userSavingsAccount = user.SavingAccounts.FirstOrDefault();
            CurrentAccount? userCurrentAccount = user.CurrentAccounts.FirstOrDefault();
            long accountBalance = user.SavingAccounts.Sum(ca => ca.Balance);

            if (accountBalance <  savingsInfo.Amount)
            {
                return false;
            }

            userSavingsAccount.Balance -= savingsInfo.Amount;
            userCurrentAccount.Balance += savingsInfo.Amount;

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

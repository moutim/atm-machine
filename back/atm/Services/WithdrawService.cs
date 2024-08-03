using atm.Database;
using atm.DTOs.Requests;
using atm.Enums;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class WithdrawService
    {
        private readonly DataContext _context;
        private readonly StatementService _statementService;

        public WithdrawService(DataContext context, StatementService statementService)
        {
            _context = context;
            _statementService=statementService;
        }

        public async Task<bool> Withdraw(WithdrawDTO withdrawInfo)
        {
            var user = await _context.Users
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.UserId == withdrawInfo.UserId);

            var currentAccount = user?.CurrentAccounts.FirstOrDefault();
            if (currentAccount == null || currentAccount.Balance < withdrawInfo.Amount)
            {
                return false;
            }

            currentAccount.Balance -= withdrawInfo.Amount;
            _context.CurrentAccounts.Update(currentAccount);

            await _statementService.CreateStatement
                ((int)TransactionTypes.Deposit, withdrawInfo.Amount, withdrawInfo.UserId, (int)AddOrRemoved.Removed);

            return true;
        }
    }
}

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

        public async Task<Dictionary<int, int>?> Withdraw(WithdrawDTO withdrawInfo)
        {
            var user = await _context.Users
                .Include(u => u.CurrentAccounts)
                .FirstOrDefaultAsync(u => u.UserId == withdrawInfo.UserId);

            var currentAccount = user?.CurrentAccounts.FirstOrDefault();
            if (currentAccount == null || currentAccount.Balance < withdrawInfo.Amount)
            {
                return null;
            }

            currentAccount.Balance -= withdrawInfo.Amount;
            _context.CurrentAccounts.Update(currentAccount);

            await _statementService.CreateStatement
                ((int)TransactionTypes.Deposit, withdrawInfo.Amount, withdrawInfo.UserId, (int)AddOrRemoved.Removed);

            var notes = CalculateNotes(withdrawInfo.Amount);


            return notes;
        }

        private Dictionary<int, int> CalculateNotes(decimal amount)
        {
            var notes = new Dictionary<int, int>();
            int[] denominations = { 50, 20, 10 };

            foreach (var denomination in denominations)
            {
                int noteCount = (int)(amount / denomination);
                if (noteCount > 0)
                {
                    notes[denomination] = noteCount;
                    amount -= noteCount * denomination;
                }
            }

            return notes;
        }
    }
}

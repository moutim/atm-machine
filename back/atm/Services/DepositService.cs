using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Requests;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class DepositService
    {
        private readonly DataContext _context;

        public DepositService(DataContext datacontext)
        {
            _context = datacontext;
        }

        public async Task<bool> Deposit(DepositDTO depositInfo)
        {
            User? user = await _context.Users
                 .Include(u => u.CurrentAccounts)
                 .FirstOrDefaultAsync(u => u.CPF == depositInfo.CPF);

            int userCurrentBalance = user.CurrentAccounts.Sum(ca => ca.Balance);

            CurrentAccount? currentAccount = user.CurrentAccounts.FirstOrDefault();

            currentAccount.Balance += depositInfo.Amount;

            await _context.SaveChangesAsync();

            return true;
        }
    }
}

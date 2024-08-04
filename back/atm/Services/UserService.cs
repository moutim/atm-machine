using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Response;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class UserService
    {
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }

        public async Task<UserInfoDTO?> GetUserInfo(int id)
        {
            var user = await _context.Users
                .Include(u => u.CurrentAccounts)
                .Include(u => u.SavingAccounts)
                .FirstOrDefaultAsync(u => u.UserId == id);

            if (user == null)
            {
                return null;
            }

            long currentAccountBalance = user.CurrentAccounts.Sum(ca => ca.Balance);
            long savingAccountBalance = user.SavingAccounts.Sum(sa => sa.Balance);

            UserInfoDTO userInfo = new UserInfoDTO()
            {
                UserId = user.UserId,
                FirstName = user.FirstName,
                LastName = user.LastName,
                CurrentAccountBalance = currentAccountBalance,
                SavingsAccountBalance = savingAccountBalance,
                LastAcces = user.LastAccess
            };
            return userInfo;
        }
    }
}

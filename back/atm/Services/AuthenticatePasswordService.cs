using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Requests;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class AuthenticatePasswordService
    {
        private readonly DataContext _context;
        private readonly PasswordHasher<User> _passwordHasher;


        public AuthenticatePasswordService(DataContext context)
        {
            _context=context;
            _passwordHasher = new PasswordHasher<User>();
        }

        public async Task<bool> AuthenticatePassword(AuthenticatePasswordDTO passwordInfo)
        {
            User? user = await _context.Users
                .FirstOrDefaultAsync(u => u.CPF == passwordInfo.CPF);

            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, passwordInfo.Password);
            return result == PasswordVerificationResult.Success;
        }
    }
}

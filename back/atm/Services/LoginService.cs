using atm.Database.Entities;
using atm.Database;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using atm.DTOs.Requests;

namespace atm.Services
{
    public class LoginService
    {
        private readonly DataContext _context;
        private readonly PasswordHasher<User> _passwordHasher;
        private readonly TokenJWTService _tokenJWT;

        public LoginService(DataContext context, TokenJWTService tokenJWT)
        {
            _context = context;
            _passwordHasher = new PasswordHasher<User>();
            _tokenJWT = tokenJWT;
        }

        public async Task<string?> LoginAndToken(LoginDTO loginInfo)
        {
            User? user = await _context.Users.FirstOrDefaultAsync(u => u.CPF == loginInfo.CPF);
            if (user == null)
            {
                return null;
            }

            var passwordVerificationResult = _passwordHasher.VerifyHashedPassword(null, user.Password, loginInfo.Password);
            if (passwordVerificationResult == PasswordVerificationResult.Failed)
            {
                return null;
            }

            return _tokenJWT.CreateAuthenticationToken(user);
        }
    }
}

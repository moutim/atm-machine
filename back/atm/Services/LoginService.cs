using atm.Database.Entities;
using atm.Database;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using atm.DTOs.Requests;
using atm.DTOs.Response;

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

        public async Task<LoginResultDTO?> LoginAndToken(LoginDTO loginInfo)
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

            await UpdateLastAccess(user);

            LoginResultDTO loginResult = new LoginResultDTO()
            {
                Token = _tokenJWT.CreateAuthenticationToken(user),
                UserId = user.UserId
        };

            return loginResult;
        }

        private async Task UpdateLastAccess(User user)
        {
            // Pega o fuso horário de Brasília
            TimeZoneInfo brasiliaTimeZone = TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time");
            DateTime nowInBrasilia = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, brasiliaTimeZone);

            user.LastAccess = nowInBrasilia;
            await _context.SaveChangesAsync();
        }
    }
}

using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Requests;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class RegisterService
    {
        private readonly DataContext _context;
        private readonly StatementService _statementService;
        private readonly PasswordHasher<User> _passwordHasher;

        public RegisterService(DataContext context, StatementService statementService)
        {
            _context = context;
            _passwordHasher = new PasswordHasher<User>();
            _statementService=statementService;
        }

        public async Task<bool> UserExists(long cpf)
        {
            return await _context.Users.AnyAsync(u => u.CPF == cpf);
        }

        public async Task<User> CreateUser(RegisterUserDTO createUserDto)
        {
            User user = new User
            {
                CPF = createUserDto.CPF,
                FirstName = createUserDto.FirstName,
                LastName = createUserDto.LastName,
                Password = _passwordHasher.HashPassword(null, createUserDto.Password)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Cria contas para o usuário
            await CreateCurrentAccount(user.UserId);
            await CreateSavingAccount(user.UserId);

            return user;
        }

        private async Task CreateCurrentAccount(int userId)
        {
            CurrentAccount currentAccount = new CurrentAccount
            {
                UserId = userId,
                Balance = 1000
            };

            _context.CurrentAccounts.Add(currentAccount);
            await _context.SaveChangesAsync();

            await _statementService.CreateStatement(1, 1000, userId, 1);
        }

        private async Task CreateSavingAccount(int userId)
        {
            SavingAccount savingAccount = new SavingAccount
            {
                UserId = userId,
                Balance = 1000
            };

            _context.SavingAccounts.Add(savingAccount);
            await _context.SaveChangesAsync();

            await _statementService.CreateStatement(5, 1000, userId, 1);
        }
    }
}

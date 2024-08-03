using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Response;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class StatementService
    {
        private readonly DataContext _context;

        public StatementService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<StatementDTO>?> GetStatement(int userId)
        {
            var userStatements = await _context.UserStatements
                .Where(us => us.UserId == userId)
                .Select(us => us.StatementId)
                .ToListAsync();

            if (userStatements.Count == 0)
            {
                return null;
            }

            var statements = await _context.Statements
                .Where(s => userStatements.Contains(s.StatementId))
                .Include(s => s.TransactionType)
                .Select(s => new StatementDTO
                {
                    StatementId = s.StatementId,
                    UserId = userId,
                    Date = s.Date,
                    Value = s.Value,
                    Type = s.TransactionType.Type
                })
                .ToListAsync();

            return statements;
        }

        public async Task CreateStatement(int transactionId, int value, int userId)
        {
            // Pega o fuso horário de Brasília
            TimeZoneInfo brasiliaTimeZone = TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time");
            DateTime nowInBrasilia = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, brasiliaTimeZone);

            Statement statement = new Statement
            {
                TransactionId = transactionId,
                Value = value,
                Date = nowInBrasilia,
            };
            _context.Statements.Add(statement);
            await _context.SaveChangesAsync();

            UserStatement userStatement = new UserStatement
            {
                StatementId = statement.StatementId,
                UserId = userId,
            };
            _context.UserStatements.Add(userStatement);
            await _context.SaveChangesAsync();
        }
    }
}

using atm.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace atm.Database
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<CurrentAccount> CurrentAccounts { get; set; }
        public DbSet<SavingAccount> SavingAccounts { get; set; }
        public DbSet<TransactionType> TransactionTypes { get; set; }
        public DbSet<Statement> Statements { get; set; }
        public DbSet<UserStatement> UserStatements { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CurrentAccount>()
                .HasKey(ca => new { ca.AccountId, ca.UserId });

            modelBuilder.Entity<SavingAccount>()
                .HasKey(sa => new { sa.AccountId, sa.UserUserId });

            modelBuilder.Entity<Statement>()
                .HasKey(s => s.StatementId);

            modelBuilder.Entity<UserStatement>()
                .HasKey(us => new { us.StatementId, us.UserId });

            modelBuilder.Entity<UserStatement>()
                .HasOne(us => us.User)
                .WithMany(u => u.UserStatements)
                .HasForeignKey(us => us.UserId);

            modelBuilder.Entity<UserStatement>()
                .HasOne(us => us.Statement)
                .WithMany(s => s.UserStatements)
                .HasForeignKey(us => us.StatementId);
        }
    }
}

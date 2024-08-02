using System.ComponentModel.DataAnnotations;

namespace atm.Database.Entities
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public long CPF { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public ICollection<CurrentAccount> CurrentAccounts { get; set; }
        public ICollection<SavingAccount> SavingAccounts { get; set; }
        public ICollection<UserStatement> UserStatements { get; set; }
    }
}

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace atm.Database.Entities
{
    public class SavingAccount
    {
        [Key]
        public int AccountId { get; set; }

        [ForeignKey("User")]
        public int UserUserId { get; set; }
        public int Balance { get; set; }
        public User? User { get; set; }
    }
}

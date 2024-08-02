using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace atm.Database.Entities
{
    public class UserStatement
    {
        [Key, Column(Order = 0)]
        public int StatementId { get; set; }

        [ForeignKey("StatementId")]
        public Statement Statement { get; set; }

        [Key, Column(Order = 1)]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}

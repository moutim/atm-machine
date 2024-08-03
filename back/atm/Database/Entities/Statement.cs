using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace atm.Database.Entities
{
    public class Statement
    {
        [Key, Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StatementId { get; set; }

        [Key, Column(Order = 1)]
        public int TransactionId { get; set; }

        [ForeignKey("TransactionId")]
        public TransactionType TransactionType { get; set; }
        public DateTime Date { get; set; }
        public int Value { get; set; }
        public int AddOrRemoved { get; set; }
        public ICollection<UserStatement> UserStatements { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace atm.Database.Entities
{
    public class TransactionType
    {
        [Key]
        public int? TransactionId { get; set; }
        public string Type { get; set; }
        public ICollection<Statement> Statements { get; set; }
    }
}

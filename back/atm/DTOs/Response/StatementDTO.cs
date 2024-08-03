namespace atm.DTOs.Response
{
    public class StatementDTO
    {
        public int StatementId { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        public string Type { get; set; }
    }
}

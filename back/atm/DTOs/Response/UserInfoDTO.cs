namespace atm.DTOs.Response
{
    public class UserInfoDTO
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int CurrentAccountBalance { get; set; }
        public int SavingsAccountBalance { get; set; }
        public DateTime? LastAcces {  get; set; }
    }
}

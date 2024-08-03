namespace atm.DTOs.Response
{
    public class LoginResultDTO
    {
        public string Token { get; set; } = string.Empty;
        public int UserId { get; set; }
        public long CPF {  get; set; }
    }
}

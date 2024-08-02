namespace atm.DTOs.Requests
{
    public class RegisterUserDTO
    {
        public long CPF { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
    }
}

namespace atm.DTOs.Requests
{
    public class TransferDTO
    {
        public long CPFOrigin { get; set; }
        public long CPFDestination { get; set; }
        public long Amount { get; set; }
    }
}

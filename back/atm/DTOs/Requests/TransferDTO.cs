namespace atm.DTOs.Requests
{
    public class TransferDTO
    {
        public long CPFOrigin { get; set; }
        public long CPFDestination { get; set; }
        public int Amount { get; set; }
    }
}

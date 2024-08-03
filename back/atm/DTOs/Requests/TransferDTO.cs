namespace atm.DTOs.Requests
{
    public class TransferDTO
    {
        public long CpfOrigin { get; set; }
        public long CpfDestination { get; set; }
        public int Amount { get; set; }
    }
}

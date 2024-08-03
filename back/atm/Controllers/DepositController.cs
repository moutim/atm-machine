using atm.DTOs.Requests;
using atm.DTOs.Response;
using atm.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepositController : ControllerBase
    {
        private readonly DepositService _depositService;

        public DepositController(DepositService depositService)
        {
            _depositService = depositService;
        }

        [HttpPost]
        public async Task<IActionResult> Deposit([FromBody] DepositDTO depositTransfer)
        {
            bool resultDeposit = await _depositService.Deposit(depositTransfer);

            if (!resultDeposit)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Não foi possível realizar a transferência."
                };
                return BadRequest(message);
            }
            else
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Tranferência realizada com sucesso."
                };
                return Ok(message);
            }
        }
    }
}

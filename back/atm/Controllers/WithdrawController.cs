using atm.DTOs.Requests;
using atm.DTOs.Response;
using atm.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WithdrawController : ControllerBase
    {
        private readonly WithdrawService _withdrawService;

        public WithdrawController(WithdrawService withdrawService)
        {
            _withdrawService = withdrawService;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Withdraw([FromBody] WithdrawDTO withdrawInfo)
        {
            bool withdrawResult = await _withdrawService.Withdraw(withdrawInfo);

            if (!withdrawResult)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Saldo insuficiente."
                };
                return BadRequest(message);
            }
            else
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Saque realizado com sucesso!"
                };
                return Ok(message);
            }
        }
    }
}

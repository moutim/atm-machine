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
    public class TransferController : ControllerBase
    {
        private readonly TransferService _transferService;

        public TransferController(TransferService transferService)
        {
            _transferService=transferService;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Transfer([FromBody] TransferDTO transferInfo)
        {
            bool resultTransfer = await _transferService.Transfer(transferInfo);

            if (!resultTransfer)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Saldo insuficiente para realizar a transação."
                };
                return BadRequest(message);
            }
            else
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Transação realizada com sucesso!"
                };
                return Ok(message);
            }
        }
    }
}

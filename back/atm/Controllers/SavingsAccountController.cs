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
    public class SavingsAccountController : ControllerBase
    {
        private readonly SavingsAccountService _savingsAccountService;

        public SavingsAccountController(SavingsAccountService savingsAccountService)
        {
            _savingsAccountService=savingsAccountService;
        }

        [Authorize]
        [HttpPost("Deposit")]
        public async Task<IActionResult> Deposit([FromBody] SavingsAccountDTO savingsInfo)
        {
            bool resultAdd = await _savingsAccountService.Deposit(savingsInfo);

            if (!resultAdd)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Não foi possível realizar seu depósito na conta poupança."
                };
                return BadRequest(message);

            }
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Depósito realizado com sucesso na sua conta poupança."
                };
                return Ok(message);
            }
        }

        [Authorize]
        [HttpPost("Withdraw")]
        public async Task<IActionResult> Add([FromBody] SavingsAccountDTO savingsInfo)
        {
            bool resultAdd = await _savingsAccountService.Withdraw(savingsInfo);

            if (!resultAdd)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Saldo insuficiente para o saque."
                };
                return BadRequest(message);

            }
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Saque realizado com sucesso da sua conta poupança."
                };
                return Ok(message);
            }
        }
    }
}

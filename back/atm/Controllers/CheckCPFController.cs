using atm.Database.Entities;
using atm.DTOs.Requests;
using atm.DTOs.Response;
using atm.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckCPFController : ControllerBase
    {
        private readonly CheckCPFService _checkCPFService;

        public CheckCPFController(CheckCPFService checkCPFService)
        {
            _checkCPFService = checkCPFService;
        }

        [HttpPost]
        public async Task<IActionResult> CheckCPF([FromBody] CheckCPFDTO cpfInfo)
        {
            ResultCheckCPFDTO? resultCheckCPF = await _checkCPFService.CheckCPF(cpfInfo);

            if (resultCheckCPF == null)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Não existe conta cadastrada com esse CPF."
                };
                return NotFound(message);
            }
            else
            {
                return Ok(resultCheckCPF);
            }
        }
    }
}

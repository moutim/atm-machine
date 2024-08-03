using atm.DTOs.Response;
using atm.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatementController : ControllerBase
    {
        private readonly StatementService _statementService;

        public StatementController(StatementService statementService)
        {
            _statementService = statementService;
        }

        [Authorize]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetStatement(int userId)
        {
            List<StatementDTO>? resultStatements = await _statementService.GetStatement(userId);

            if (resultStatements == null)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Não existe transações registradas nessa conta."
                };
                return NotFound(message);
            }

            return Ok(resultStatements);
        }
    }
}

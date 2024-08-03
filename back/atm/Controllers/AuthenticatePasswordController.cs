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
    public class AuthenticatePasswordController : ControllerBase
    {
        private readonly AuthenticatePasswordService _authenticatePasswordService;

        public AuthenticatePasswordController(AuthenticatePasswordService authenticatePasswordService)
        {
            _authenticatePasswordService=authenticatePasswordService;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AuthenticatePassowrd([FromBody] AuthenticatePasswordDTO authenticateInfo)
        {
            bool resultAuthenticate = await _authenticatePasswordService.AuthenticatePassword(authenticateInfo);

            if (!resultAuthenticate)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Senha incorreta."
                };
                return Unauthorized(message);
            }
            else
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "Senha autenticada com sucesso."
                };
                return Ok(message);
            }
        }
    }
}

using atm.Services;
using Microsoft.AspNetCore.Http;
using atm.DTOs.Requests;
using Microsoft.AspNetCore.Mvc;
using atm.DTOs.Response;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginService _loginService;

        public LoginController (LoginService loginService)
        {
            _loginService=loginService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginInfo)
        {
            var loginResult = await _loginService.LoginAndToken(loginInfo);

            if (loginResult == null)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = "CPF ou senha incorreto"
                };

                return Unauthorized(message);
            }

            TokenJWTDTO token = new TokenJWTDTO() { Token = loginResult };

            return Ok(token);
        }
    }
}

using atm.DTOs.Response;
using atm.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly UserService _userService;

        public UserInfoController(UserService userService)
        {
            _userService = userService;
        }

        [Authorize]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserInfo(int userId)
        {
            var resultService = await _userService.GetUserInfo(userId);

            if (resultService == null)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = $"Usuário com o id {userId} não encontrado"
                };
                return NotFound(message);
            }

            return Ok(resultService);
        }
    }
}

using atm.Database.Entities;
using atm.DTOs.Requests;
using atm.DTOs.Response;
using atm.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly RegisterService _userService;

        public RegisterController(RegisterService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] RegisterUserDTO registerUserDTO)
        {
            if (await _userService.UserExists(registerUserDTO.CPF))
            {
                MessageDTO errorResponse = new MessageDTO
                {
                    Message = $"Já existe um usuário cadastrado com esse CPF."
                };
                return Conflict(errorResponse);
            }

            await _userService.CreateUser(registerUserDTO);

            MessageDTO successResponse = new MessageDTO
            {
                Message = "Usuário cadastrado com sucesso."
            };

            return Created("/api/register", successResponse);
        }
    }
}

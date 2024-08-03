﻿using atm.DTOs.Response;
using atm.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [Authorize]
        [HttpGet("UserInfo/{id}")]
        public async Task<IActionResult> GetUserInfo(int id)
        {
            var resultService = await _userService.GetUserInfo(id);

            if (resultService == null)
            {
                MessageDTO message = new MessageDTO()
                {
                    Message = $"Usuário com o id {id} não encontrado"
                };
                return NotFound(message);
            }

            return Ok(resultService);
        }
    }
}

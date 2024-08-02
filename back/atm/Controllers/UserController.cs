using atm.Database.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace atm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetUserInfo()
        {
            var user = new List<User>
            {
                new User
                {
                    Id = 1,
                    FirstName = "Test",
                    LastName = "Test",
                    CPF = 51225511895,
                    Password = "Test"
                }
            };

            return Ok(user);
        }
    }
}

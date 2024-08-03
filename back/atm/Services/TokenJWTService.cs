using atm.Database.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace atm.Services
{
    public class TokenJWTService
    {
        private readonly IConfiguration _configuration;

        public TokenJWTService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string CreateAuthenticationToken(User userInfo)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenSecretKey = Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, userInfo.UserId.ToString()),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Aud, _configuration["JwtSettings:Audience"]),
                    new Claim(JwtRegisteredClaimNames.Iss, _configuration["JwtSettings:Issuer"])
                }),

                Expires = DateTime.UtcNow.AddHours(6),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenSecretKey),
                SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            string accessToken = tokenHandler.WriteToken(token);

            return accessToken;
        }
    }
}

using atm.Database;
using atm.Database.Entities;
using atm.DTOs.Requests;
using atm.DTOs.Response;
using Microsoft.EntityFrameworkCore;

namespace atm.Services
{
    public class CheckCPFService
    {
        private readonly DataContext _context;

        public CheckCPFService(DataContext context)
        {
            _context=context;
        }

        public async Task<ResultCheckCPFDTO?> CheckCPF(CheckCPFDTO cpfInfo)
        {
            User? checkUser = await _context.Users.FirstOrDefaultAsync(u => u.CPF == cpfInfo.CPF );

            if (checkUser == null)
            {
                return null;
            } 
            else
            {
                ResultCheckCPFDTO resultCheck = new ResultCheckCPFDTO()
                {
                    CPF = cpfInfo.CPF,
                    FirstName = checkUser.FirstName,
                    LastName = checkUser.LastName,
                };
                return resultCheck;
            }
        }
    }
}

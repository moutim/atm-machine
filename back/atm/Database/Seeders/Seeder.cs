﻿using atm.Database.Entities;

namespace atm.Database.Seeders
{
    public class Seeder
    {
        public static void Initialize(DataContext context)
        {
            // Verifica se o banco de dados já foi criado
            context.Database.EnsureCreated();

            // Verifica se há dados na tabela User, se houver, não faz o seed
            if (context.Users.Any())
            {
                return;
            }

            // Adiciona dados iniciais para Users
            var users = new User[]
            {
                new User { UserId = 1, CPF = 57899251893, FirstName = "Camile", LastName = "Moutim", Password = "AQAAAAIAAYagAAAAEMzviBOqBonyENF2IV2RI45epEe3rkHWT0lq5ujT0uXA0CWWhXcR8WePx5ym4yDXVA==" },
                new User { UserId = 2, CPF = 51225511895, FirstName = "Vitor", LastName = "Moutim", Password = "AQAAAAIAAYagAAAAEMzviBOqBonyENF2IV2RI45epEe3rkHWT0lq5ujT0uXA0CWWhXcR8WePx5ym4yDXVA==" }
            };
            foreach (var user in users)
            {
                context.Users.Add(user);
            }

            // Adiciona dados iniciais para CurrentAccounts
            var accounts = new CurrentAccount[]
            {
                new CurrentAccount { AccountId = 1, UserId = 1, Balance = 5000 },
                new CurrentAccount { AccountId = 2, UserId = 2, Balance = 5000 }
            };
            foreach (var account in accounts)
            {
                context.CurrentAccounts.Add(account);
            }

            // Adiciona dados iniciais para SavingAccounts
            var savingAccounts = new SavingAccount[]
            {
                new SavingAccount { AccountId = 1, UserId = 1, Balance = 7000 },
                new SavingAccount { AccountId = 2, UserId = 2, Balance = 7000 }
            };
            foreach (var savingAccount in savingAccounts)
            {
                context.SavingAccounts.Add(savingAccount);
            }

            // Adiciona dados iniciais para TransactionTypes
            var transactionTypes = new TransactionType[]
            {
                new TransactionType { TransactionId = 1, Type = "depósito em conta corrente" },
                new TransactionType { TransactionId = 2, Type = "transferência" },
                new TransactionType { TransactionId = 3, Type = "saque" },
                new TransactionType { TransactionId = 4, Type = "retirada da poupança" },
                new TransactionType { TransactionId = 5, Type = "depósito na poupança" },
            };
            foreach (var transactionType in transactionTypes)
            {
                context.TransactionTypes.Add(transactionType);
            }

            context.SaveChanges();
        }
    }
}

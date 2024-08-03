﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using atm.Database;

#nullable disable

namespace atm.Database.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("atm.Database.Entities.CurrentAccount", b =>
                {
                    b.Property<int>("AccountId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("AccountId"));

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("Balance")
                        .HasColumnType("int");

                    b.HasKey("AccountId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("CurrentAccounts");
                });

            modelBuilder.Entity("atm.Database.Entities.SavingAccount", b =>
                {
                    b.Property<int?>("AccountId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int?>("AccountId"));

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("Balance")
                        .HasColumnType("int");

                    b.HasKey("AccountId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("SavingAccounts");
                });

            modelBuilder.Entity("atm.Database.Entities.Statement", b =>
                {
                    b.Property<int?>("StatementId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnOrder(0);

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int?>("StatementId"));

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("TransactionId")
                        .HasColumnType("int")
                        .HasColumnOrder(1);

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("StatementId");

                    b.HasIndex("TransactionId");

                    b.ToTable("Statements");
                });

            modelBuilder.Entity("atm.Database.Entities.TransactionType", b =>
                {
                    b.Property<int?>("TransactionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int?>("TransactionId"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("TransactionId");

                    b.ToTable("TransactionTypes");
                });

            modelBuilder.Entity("atm.Database.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("UserId"));

                    b.Property<long>("CPF")
                        .HasColumnType("bigint");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime?>("LastAccess")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("atm.Database.Entities.UserStatement", b =>
                {
                    b.Property<int?>("StatementId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnOrder(0);

                    b.Property<int>("UserId")
                        .HasColumnType("int")
                        .HasColumnOrder(1);

                    b.HasKey("StatementId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("UserStatements");
                });

            modelBuilder.Entity("atm.Database.Entities.CurrentAccount", b =>
                {
                    b.HasOne("atm.Database.Entities.User", "User")
                        .WithMany("CurrentAccounts")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("atm.Database.Entities.SavingAccount", b =>
                {
                    b.HasOne("atm.Database.Entities.User", "User")
                        .WithMany("SavingAccounts")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("atm.Database.Entities.Statement", b =>
                {
                    b.HasOne("atm.Database.Entities.TransactionType", "TransactionType")
                        .WithMany("Statements")
                        .HasForeignKey("TransactionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("TransactionType");
                });

            modelBuilder.Entity("atm.Database.Entities.UserStatement", b =>
                {
                    b.HasOne("atm.Database.Entities.Statement", "Statement")
                        .WithMany("UserStatements")
                        .HasForeignKey("StatementId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("atm.Database.Entities.User", "User")
                        .WithMany("UserStatements")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Statement");

                    b.Navigation("User");
                });

            modelBuilder.Entity("atm.Database.Entities.Statement", b =>
                {
                    b.Navigation("UserStatements");
                });

            modelBuilder.Entity("atm.Database.Entities.TransactionType", b =>
                {
                    b.Navigation("Statements");
                });

            modelBuilder.Entity("atm.Database.Entities.User", b =>
                {
                    b.Navigation("CurrentAccounts");

                    b.Navigation("SavingAccounts");

                    b.Navigation("UserStatements");
                });
#pragma warning restore 612, 618
        }
    }
}
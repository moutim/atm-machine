using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace atm.Database.Migrations
{
    /// <inheritdoc />
    public partial class UpdateColumnInUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LastAccess",
                table: "Users",
                type: "datetime(6)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastAccess",
                table: "Users");
        }
    }
}

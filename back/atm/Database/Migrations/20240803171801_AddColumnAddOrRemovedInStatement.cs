using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace atm.Database.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnAddOrRemovedInStatement : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AddOrRemoved",
                table: "Statements",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddOrRemoved",
                table: "Statements");
        }
    }
}

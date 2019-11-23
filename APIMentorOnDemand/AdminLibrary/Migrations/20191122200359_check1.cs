using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AdminLibrary.Migrations
{
    public partial class check1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //deleted AspNetUsers and AspNetRole creation and Claims
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentEmail = table.Column<string>(nullable: false),
                    MentorSkillId = table.Column<int>(nullable: false),
                    CompletionStatus = table.Column<int>(nullable: false),
                    Rating = table.Column<int>(nullable: false),
                    IsRequested = table.Column<bool>(nullable: false),
                    IsRegistered = table.Column<bool>(nullable: false),
                    IsRejected = table.Column<bool>(nullable: false),
                    IsCompleted = table.Column<bool>(nullable: false),
                    IsConfirmed = table.Column<bool>(nullable: false),
                    IsBlocked = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "MentorSkills",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MentorEmail = table.Column<string>(nullable: false),
                    TechId = table.Column<int>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MentorSkills", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentEmail = table.Column<string>(nullable: true),
                    MentorSkillId = table.Column<int>(nullable: false),
                    IsStudent = table.Column<bool>(nullable: false),
                    IsMentor = table.Column<bool>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    CompletionStatus = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<int>(nullable: false),
                    CourseName = table.Column<string>(nullable: true),
                    TotalFee = table.Column<int>(nullable: false),
                    MentorName = table.Column<string>(nullable: true),
                    MentorEmail = table.Column<string>(nullable: true),
                    StudentName = table.Column<string>(nullable: true),
                    StudentEmail = table.Column<string>(nullable: true),
                    CompletionStatus = table.Column<int>(nullable: false),
                    CourseCommision = table.Column<int>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Technologies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdminEmail = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Fee = table.Column<int>(nullable: false),
                    Commission = table.Column<int>(nullable: false),
                    Duration = table.Column<int>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Technologies", x => x.Id);
                });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "MentorSkills");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropTable(
                name: "Technologies");
        }
    }
}

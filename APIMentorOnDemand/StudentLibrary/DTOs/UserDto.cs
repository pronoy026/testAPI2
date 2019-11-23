using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.DTOs
{
    public class UserDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public bool IsBlocked { get; set; }
        public string PhoneNumber { get; set; }
        public string Role { get; set; }
        public int Rating { get; set; } = 5;
        public int Experience { get; set; }
    }
}

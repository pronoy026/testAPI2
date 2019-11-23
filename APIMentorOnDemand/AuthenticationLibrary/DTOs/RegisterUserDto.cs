﻿using System;
using System.Collections.Generic;
using System.Text;

namespace AuthenticationLibrary.DTOs
{
    public class RegisterUserDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public int Experience { get; set; }
        public string LinkedinUrl { get; set; }
        public int Role { get; set; }
    }
}

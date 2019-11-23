using System;
using System.Collections.Generic;
using System.Text;

namespace AuthenticationLibrary.DTOs
{
    public class TokenResponseDto
    {
        public string Token { get; set; }
        public string Email { get; set; }
        public int Role { get; set; }
    }
}

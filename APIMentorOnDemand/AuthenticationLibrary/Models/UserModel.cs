using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AuthenticationLibrary.Models
{
    public class UserModel : IdentityUser
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Gender { get; set; }
        [Required]
        public string LinkedInUrl { get; set; }
        public int Experience { get; set; }
        public int Rating { get; set; }
        public bool IsBlocked { get; set; }

    }
}

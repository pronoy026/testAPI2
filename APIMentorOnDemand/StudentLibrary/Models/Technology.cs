using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StudentLibrary.Models
{
    public class Technology
    {
        [Key]
        public int Id { get; set; }
        public string AdminEmail { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Fee { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Commission percentage should be between 0 and 100")]
        public int Commission { get; set; }
        [Required]
        public int Duration { get; set; }
        [Required]
        public string ImageUrl { get; set; }
        public bool IsActive { get; set; } = true;

    }
}

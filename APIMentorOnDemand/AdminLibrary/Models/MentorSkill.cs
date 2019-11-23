using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AdminLibrary.Models
{
    public class MentorSkill
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string MentorEmail { get; set; }
        [Required]
        public int TechId { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
    }
}

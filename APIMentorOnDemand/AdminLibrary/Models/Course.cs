using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AdminLibrary.Models
{
    public class Course
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string StudentEmail { get; set; }
        [Required]
        public int MentorSkillId { get; set; }
        public int CompletionStatus { get; set; }
        public int Rating { get; set; }
        public bool IsRequested { get; set; }
        public bool IsRegistered { get; set; }
        public bool IsRejected { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsConfirmed { get; set; }
        public bool IsBlocked { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AdminLibrary.Models
{
    public class Notification
    {
        [Key]
        public int Id { get; set; }
        public string StudentEmail { get; set; }
        public int MentorSkillId { get; set; }
        public bool IsStudent { get; set; }
        public bool IsMentor { get; set; }
        public string Type { get; set; }
        public int CompletionStatus { get; set; }
    }
}

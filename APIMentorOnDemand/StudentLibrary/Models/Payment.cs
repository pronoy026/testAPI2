using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace StudentLibrary.Models
{
    public class Payment
    {
        [Key]
        public int Id { get; set; }
        public int Amount { get; set; }
        public string CourseName { get; set; }
        public int TotalFee { get; set; }
        public string MentorName { get; set; }
        public string MentorEmail { get; set; }
        public string StudentName { get; set; }
        public string StudentEmail { get; set; }
        public int CompletionStatus { get; set; }
        public int CourseCommision { get; set; }
        public string Type { get; set; }
    }
}

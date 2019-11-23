using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.DTOs
{
    public class NotificationDto
    {
        public int NotiId { get; set; }
        public int Fee { get; set; }
        public string CourseName { get; set; }
        public UserDto Mentor { get; set; }
        public UserDto Student { get; set; }
        public string Type { get; set; }
        public int Commission { get; set; }
        public int CompletionStatus { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace AdminLibrary.DTOs
{
    public class CourseDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Fee { get; set; }
        public int Commission { get; set; }
        public int Duration { get; set; }
        public string ImageUrl { get; set; }
        public int MentorSkillId { get; set; }
        public UserDto Mentor { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }
}

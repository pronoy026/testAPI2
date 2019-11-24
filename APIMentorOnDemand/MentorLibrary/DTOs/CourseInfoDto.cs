using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.DTOs
{
    public class CourseInfoDto
    {
        public int RegisteredCourses { get; set; }
        public int AppliedCourses { get; set; }
        public int ConfirmedCourses { get; set; }
        public int CompletedCourses { get; set; }
    }
}

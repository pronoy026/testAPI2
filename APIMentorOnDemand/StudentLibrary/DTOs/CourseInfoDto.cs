using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.DTOs
{
    public class CourseInfoDto
    {
        public int RegisteredCourses { get; set; }
        public int AppliedCourses { get; set; }
        public int ConfirmedCourses { get; set; }
        public int CompletedCourses { get; set; }
        public int RejectedCourses { get; set; }
    }
}

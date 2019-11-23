using StudentLibrary.DTOs;
using StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.Repositories
{
    public interface IStudentRepository
    {
        public IEnumerable<IndividualCourseDto> GetAppliedCourses(string StudentEmail);
        public IEnumerable<IndividualCourseDto> GetRejectedCourses(string StudentEmail);
        public IEnumerable<IndividualCourseDto> GetCompletedCourses(string StudentEmail);
        public IEnumerable<IndividualCourseDto> GetRegisteredCourses(string StudentEmail);
        public IEnumerable<IndividualCourseDto> GetConfirmedCourses(string StudentEmail);

        public IEnumerable<NotificationDto> GetNotifications(string email);

        public bool RegisterCourse(Course course);
        public bool CourseCompletionStatusUpdate(Course course);
        public bool CourseCompletionUpdate(Course course);
        public bool CheckCourse(Course course);
        public bool ApplyCourse(Course course);

        public bool DeleteNotifications(string email);
        public bool DeleteNotificationById(int id);
        public bool UpdateCourseRating(Course course);
    }
}

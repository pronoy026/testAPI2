using MentorLibrary.DTOs;
using MentorLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Repositories
{
    public interface IMentorRepository
    {
        public IEnumerable<Technology> GetTechnologies();
        public IEnumerable<IndividualCourseDto> GetAppliedCourses(string MentorEmail);
        public IEnumerable<IndividualCourseDto> GetRegisteredCourses(string MentorEmail);
        public IEnumerable<IndividualCourseDto> GetCompletedCourses(string MentorEmail);
        public IEnumerable<IndividualCourseDto> GetRejectedCourses(string MentorEmail);
        public IEnumerable<IndividualCourseDto> GetConfirmedCourses(string MentorEmail);

        public IEnumerable<NotificationDto> GetNotifications(string email);

        public bool AcceptCourse(Course course);
        public bool RejectCourse(Course course);
        public bool MentorSkillExists(int techId, string mentorEmail);
        public bool CreateSkill(MentorSkill mentorSkill);
        public bool DeleteNotifications(string email);
        public bool DeleteNotificationById(int id);

        public IEnumerable<Payment> GetPaymentRecords(string email);

    }
}

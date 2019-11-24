using MentorLibrary.DTOs;
using MentorLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MentorLibrary.Repositories
{
    public class MentorRepository : IMentorRepository
    {
        MentorDBContext context;
        public MentorRepository(MentorDBContext context)
        {
            this.context = context;
        }



        public bool CreateSkill(MentorSkill mentorSkill)
        {
            try
            {
                context.MentorSkills.Add(mentorSkill);
                context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<IndividualCourseDto> GetAppliedCourses(string MentorEmail)
        {
            try
            {
                var courses = (from s in context.MentorSkills
                               join t in context.Technologies on s.TechId equals t.Id
                               join c in context.Courses on s.Id equals c.MentorSkillId
                               where (s.MentorEmail == MentorEmail && c.IsRequested == true)
                               select new IndividualCourseDto
                               {
                                   Name = t.Name,
                                   Description = t.Description,
                                   Fee = t.Fee,
                                   ImageUrl = t.ImageUrl,
                                   Duration = t.Duration,
                                   MentorSkillId = s.Id,
                                   Student = (
                                           from u in context.CustomUsers
                                           where (c.StudentEmail == u.Email)
                                           select new UserDto
                                           {
                                               Id = u.Id,
                                               Email = u.Email,
                                               Name = u.Name
                                           }).FirstOrDefault(),
                                   StartDate = s.StartDate.ToLongDateString(),
                                   EndDate = s.EndDate.ToLongDateString()
                               }
                );
                return courses;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<IndividualCourseDto> GetRegisteredCourses(string MentorEmail)
        {
            try
            {
                var courses = (from s in context.MentorSkills
                               join t in context.Technologies on s.TechId equals t.Id
                               join c in context.Courses on s.Id equals c.MentorSkillId
                               where (s.MentorEmail == MentorEmail && c.IsRegistered == true)
                               select new IndividualCourseDto
                               {
                                   Name = t.Name,
                                   Description = t.Description,
                                   Fee = t.Fee,
                                   ImageUrl = t.ImageUrl,
                                   Duration = t.Duration,
                                   MentorSkillId = s.Id,
                                   Student = (
                                           from u in context.CustomUsers
                                           where (c.StudentEmail == u.Email)
                                           select new UserDto
                                           {
                                               Id = u.Id,
                                               Email = u.Email,
                                               Name = u.Name
                                           }).FirstOrDefault(),
                                   StartDate = s.StartDate.ToLongDateString(),
                                   EndDate = s.EndDate.ToLongDateString(),
                                   CompletionStatus = c.CompletionStatus,
                                   Rating = c.Rating
                               }
                );
                return courses;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<IndividualCourseDto> GetCompletedCourses(string MentorEmail)
        {
            try
            {
                var courses = (from s in context.MentorSkills
                               join t in context.Technologies on s.TechId equals t.Id
                               join c in context.Courses on s.Id equals c.MentorSkillId
                               where (s.MentorEmail == MentorEmail && c.IsCompleted == true)
                               select new IndividualCourseDto
                               {
                                   Name = t.Name,
                                   Description = t.Description,
                                   Fee = t.Fee,
                                   ImageUrl = t.ImageUrl,
                                   Duration = t.Duration,
                                   MentorSkillId = s.Id,
                                   Student = (
                                           from u in context.CustomUsers
                                           where (c.StudentEmail == u.Email)
                                           select new UserDto
                                           {
                                               Id = u.Id,
                                               Email = u.Email,
                                               Name = u.Name
                                           }).FirstOrDefault(),
                                   StartDate = s.StartDate.ToLongDateString(),
                                   EndDate = s.EndDate.ToLongDateString(),
                                   CompletionStatus = c.CompletionStatus,
                                   Rating = c.Rating
                               }
                );
                return courses;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<IndividualCourseDto> GetRejectedCourses(string MentorEmail)
        {
            try
            {
                var courses = (from s in context.MentorSkills
                               join t in context.Technologies on s.TechId equals t.Id
                               join c in context.Courses on s.Id equals c.MentorSkillId
                               where (s.MentorEmail == MentorEmail && c.IsRejected == true)
                               select new IndividualCourseDto
                               {
                                   Name = t.Name,
                                   Description = t.Description,
                                   Fee = t.Fee,
                                   ImageUrl = t.ImageUrl,
                                   Duration = t.Duration,
                                   MentorSkillId = s.Id,
                                   Student = (
                                           from u in context.CustomUsers
                                           where (c.StudentEmail == u.Email)
                                           select new UserDto
                                           {
                                               Id = u.Id,
                                               Email = u.Email,
                                               Name = u.Name
                                           }).FirstOrDefault(),
                                   StartDate = s.StartDate.ToLongDateString(),
                                   EndDate = s.EndDate.ToLongDateString(),
                                   CompletionStatus = c.CompletionStatus,
                                   Rating = c.Rating
                               }
                );
                return courses;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<Technology> GetTechnologies()
        {
            try
            {
                return context.Technologies.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool MentorSkillExists(int techId, string mentorEmail)
        {
            try
            {
                var skill = context.MentorSkills.Where(s => s.TechId == techId && s.MentorEmail == mentorEmail).FirstOrDefault();
                if (skill != null)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool AcceptCourse(Course course)
        {
            var findcourse = context.Courses.Where(c => c.MentorSkillId == course.MentorSkillId && c.StudentEmail == course.StudentEmail).FirstOrDefault();
            findcourse.IsCompleted = false;
            findcourse.IsRegistered = false;
            findcourse.IsRejected = false;
            findcourse.IsRequested = false;
            findcourse.IsConfirmed = true;
            var result = context.SaveChanges();

            var noti = new Notification
            {
                StudentEmail = course.StudentEmail,
                MentorSkillId = course.MentorSkillId,
                Type = "accept",
                IsStudent = true,
                IsMentor = false,
                CompletionStatus = 0
            };

            context.Notifications.Add(noti);
            context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public bool RejectCourse(Course course)
        {
            var findcourse = context.Courses.Where(c => c.MentorSkillId == course.MentorSkillId && c.StudentEmail == course.StudentEmail).FirstOrDefault();
            findcourse.IsCompleted = false;
            findcourse.IsRegistered = false;
            findcourse.IsRejected = true;
            findcourse.IsRequested = false;
            findcourse.IsConfirmed = false;
            var result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public IEnumerable<IndividualCourseDto> GetConfirmedCourses(string MentorEmail)
        {
            try
            {
                var courses = (from s in context.MentorSkills
                               join t in context.Technologies on s.TechId equals t.Id
                               join c in context.Courses on s.Id equals c.MentorSkillId
                               where (s.MentorEmail == MentorEmail && c.IsConfirmed == true)
                               select new IndividualCourseDto
                               {
                                   Name = t.Name,
                                   Description = t.Description,
                                   Fee = t.Fee,
                                   ImageUrl = t.ImageUrl,
                                   Duration = t.Duration,
                                   MentorSkillId = s.Id,
                                   Student = (
                                           from u in context.CustomUsers
                                           where (c.StudentEmail == u.Email)
                                           select new UserDto
                                           {
                                               Id = u.Id,
                                               Email = u.Email,
                                               Name = u.Name
                                           }).FirstOrDefault(),
                                   StartDate = s.StartDate.ToLongDateString(),
                                   EndDate = s.EndDate.ToLongDateString(),
                                   CompletionStatus = c.CompletionStatus,
                                   Rating = c.Rating
                               }
                );
                return courses;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<NotificationDto> GetNotifications(string email)
        {
            var nots = (from s in context.MentorSkills
                        join t in context.Technologies on s.TechId equals t.Id
                        join c in context.Courses on s.Id equals c.MentorSkillId
                        join n in context.Notifications on s.Id equals n.MentorSkillId
                        where (s.MentorEmail == email && n.StudentEmail == c.StudentEmail && n.IsMentor == true)
                        select new NotificationDto
                        {
                            NotiId = n.Id,
                            CourseName = t.Name,
                            Fee = t.Fee,
                            Commission = t.Commission,
                            Student = (
                                    from u in context.CustomUsers
                                    where (c.StudentEmail == u.Email)
                                    select new UserDto
                                    {
                                        Email = u.Email,
                                        Name = u.Name
                                    }).FirstOrDefault(),
                            Type = n.Type,
                            CompletionStatus = n.CompletionStatus
                        }
                );
            return nots;
        }

        public bool DeleteNotifications(string email)
        {
            var notif = (from s in context.MentorSkills
                         join t in context.Technologies on s.TechId equals t.Id
                         join c in context.Courses on s.Id equals c.MentorSkillId
                         join n in context.Notifications on s.Id equals n.MentorSkillId
                         where (s.MentorEmail == email && n.StudentEmail == c.StudentEmail && n.IsMentor == true)
                         select n);

            context.Notifications.RemoveRange(notif);
            context.SaveChanges();
            return true;
        }

        public bool DeleteNotificationById(int id)
        {
            var notif = context.Notifications.Where(n => n.Id == id).FirstOrDefault();
            context.Notifications.Remove(notif);
            context.SaveChanges();
            return true;
        }

        public IEnumerable<Payment> GetPaymentRecords(string email)
        {
            var payments = context.Payments.Where(p => p.MentorEmail == email);
            return payments;
        }

        public CourseInfoDto CourseInfo(string email)
        {
            var Appliedcourses = (from s in context.MentorSkills
                                  join t in context.Technologies on s.TechId equals t.Id
                                  join c in context.Courses on s.Id equals c.MentorSkillId
                                  where (s.MentorEmail == email && c.IsRequested == true)
                                  select c).ToList().Count;
            var Registeredcourses = (from s in context.MentorSkills
                                     join t in context.Technologies on s.TechId equals t.Id
                                     join c in context.Courses on s.Id equals c.MentorSkillId
                                     where (s.MentorEmail == email && c.IsRegistered == true)
                                     select c).ToList().Count;
            var Confirmedcourses = (from s in context.MentorSkills
                                    join t in context.Technologies on s.TechId equals t.Id
                                    join c in context.Courses on s.Id equals c.MentorSkillId
                                    where (s.MentorEmail == email && c.IsConfirmed == true)
                                    select c).ToList().Count;
            var Completedcourses = (from s in context.MentorSkills
                                    join t in context.Technologies on s.TechId equals t.Id
                                    join c in context.Courses on s.Id equals c.MentorSkillId
                                    where (s.MentorEmail == email && c.IsCompleted == true)
                                    select c).ToList().Count;
            var result = new CourseInfoDto
            {
                AppliedCourses = Appliedcourses,
                RegisteredCourses = Registeredcourses,
                ConfirmedCourses = Confirmedcourses,
                CompletedCourses = Completedcourses
            };
            return result;
        }

        public UserDto UserInfo(string email)
        {
            var user = (
                from u in context.CustomUsers
                where(u.Email == email)
                select new UserDto
                {
                   Name = u.Name,
                   Email = u.Email,
                   Experience = u.Experience,
                   PhoneNumber = u.PhoneNumber,
                   LinkedInUrl = u.LinkedInUrl

                }).FirstOrDefault();
            return user;
        }
    }
}

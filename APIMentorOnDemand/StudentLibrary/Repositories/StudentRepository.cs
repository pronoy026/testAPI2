using StudentLibrary.DTOs;
using StudentLibrary.Models;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.Repositories
{
    public class StudentRepository : IStudentRepository
    {

        StudentDBContext context;
        public StudentRepository(StudentDBContext context)
        {
            this.context = context;
        }

        public bool ApplyCourse(Course course)
        {
            try
            {
                context.Courses.Add(course);
                context.SaveChanges();
                var noti = new Notification
                {
                    StudentEmail = course.StudentEmail,
                    MentorSkillId = course.MentorSkillId,
                    Type = "request",
                    IsStudent = false,
                    IsMentor = true,
                    CompletionStatus = 0
                };
                context.Notifications.Add(noti);
                context.SaveChanges();
                return true;

            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool CheckCourse(Course course)
        {
            try
            {
                course = context.Courses.Where(c => c.MentorSkillId == course.MentorSkillId && c.StudentEmail == course.StudentEmail).FirstOrDefault();
                if (course == null)
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

        public bool CourseCompletionStatusUpdate(Course course)
        {
            try
            {
                var findCourse = context.Courses.Where(c => c.StudentEmail == course.StudentEmail && c.MentorSkillId == course.MentorSkillId).FirstOrDefault();
                if (findCourse.CompletionStatus >= course.CompletionStatus)
                {
                    return false;
                }
                else
                {
                    findCourse.CompletionStatus = course.CompletionStatus;
                    var noti = new Notification
                    {
                        StudentEmail = course.StudentEmail,
                        MentorSkillId = course.MentorSkillId,
                        Type = "payment",
                        IsStudent = false,
                        IsMentor = true,
                        CompletionStatus = course.CompletionStatus
                    };
                    context.Notifications.Add(noti);

                    //Adding data to Payments table
                    var mentorEmailQuery = (
                        from s in context.MentorSkills
                        join c in context.Courses on s.Id equals c.MentorSkillId
                        where (c.MentorSkillId == course.MentorSkillId)
                        select s).FirstOrDefault();

                    var MentorEmail = mentorEmailQuery.MentorEmail;

                    var mentorNameQuery = (from u in context.CustomUsers
                                           where (MentorEmail == u.Email)
                                           select u).FirstOrDefault();
                    var MentorName = mentorNameQuery.Name;

                    var studentNameQuery = (from u in context.CustomUsers
                                            where (course.StudentEmail == u.Email)
                                            select u).FirstOrDefault();
                    var StudentName = studentNameQuery.Name;

                    var payment = (
                                    from s in context.MentorSkills
                                    join t in context.Technologies on s.TechId equals t.Id
                                    join c in context.Courses on s.Id equals c.MentorSkillId
                                    where (s.Id == course.MentorSkillId && c.StudentEmail == course.StudentEmail)
                                    select new Payment
                                    {
                                        Amount = (t.Fee - t.Fee * t.Commission / 100) / 4,
                                        CourseName = t.Name,
                                        TotalFee = t.Fee,
                                        MentorEmail = s.MentorEmail,
                                        StudentEmail = c.StudentEmail,
                                        MentorName = MentorName,
                                        StudentName = StudentName,
                                        CompletionStatus = course.CompletionStatus,
                                        CourseCommision = t.Commission,
                                        Type = "debit"
                                    }
                        ).FirstOrDefault();
                    context.Payments.Add(payment);
                    context.SaveChanges();

                    //////////

                }
                context.SaveChanges();

                return true;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool CourseCompletionUpdate(Course course)
        {
            try
            {
                var findCourse = context.Courses.Where(c => c.StudentEmail == course.StudentEmail && c.MentorSkillId == course.MentorSkillId).FirstOrDefault();
                findCourse.CompletionStatus = course.CompletionStatus;
                findCourse.Rating = -1;
                findCourse.IsCompleted = true;
                findCourse.IsRegistered = false;
                findCourse.IsRejected = false;
                findCourse.IsRequested = false;
                findCourse.IsConfirmed = false;
                context.SaveChanges();
                var noti = new Notification
                {
                    StudentEmail = course.StudentEmail,
                    MentorSkillId = course.MentorSkillId,
                    Type = "complete",
                    IsStudent = true,
                    IsMentor = true,
                    CompletionStatus = course.CompletionStatus
                };
                context.Notifications.Add(noti);
                context.SaveChanges();

                //Adding data to Payments table
                var mentorEmailQuery = (
                    from s in context.MentorSkills
                    join c in context.Courses on s.Id equals c.MentorSkillId
                    where (c.MentorSkillId == course.MentorSkillId)
                    select s).FirstOrDefault();

                var MentorEmail = mentorEmailQuery.MentorEmail;

                var mentorNameQuery = (from u in context.CustomUsers
                                       where (MentorEmail == u.Email)
                                       select u).FirstOrDefault();
                var MentorName = mentorNameQuery.Name;

                var studentNameQuery = (from u in context.CustomUsers
                                        where (course.StudentEmail == u.Email)
                                        select u).FirstOrDefault();
                var StudentName = studentNameQuery.Name;

                var payment = (
                                from s in context.MentorSkills
                                join t in context.Technologies on s.TechId equals t.Id
                                join c in context.Courses on s.Id equals c.MentorSkillId
                                where (s.Id == course.MentorSkillId && c.StudentEmail == course.StudentEmail)
                                select new Payment
                                {
                                    Amount = t.Fee / 4,
                                    CourseName = t.Name,
                                    TotalFee = t.Fee,
                                    MentorEmail = s.MentorEmail,
                                    StudentEmail = c.StudentEmail,
                                    MentorName = MentorName,
                                    StudentName = StudentName,
                                    CompletionStatus = 100
                                }
                    ).FirstOrDefault();
                context.Payments.Add(payment);
                context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool DeleteNotificationById(int id)
        {
            var notif = context.Notifications.Where(n => n.Id == id).FirstOrDefault();
            context.Notifications.Remove(notif);
            context.SaveChanges();
            return true;
        }

        public bool DeleteNotifications(string email)
        {
            var notif = (from s in context.MentorSkills
                         join t in context.Technologies on s.TechId equals t.Id
                         join c in context.Courses on s.Id equals c.MentorSkillId
                         join n in context.Notifications on s.Id equals n.MentorSkillId
                         where (s.Id == n.MentorSkillId && n.StudentEmail == email && n.IsStudent == true)
                         select n);

            context.Notifications.RemoveRange(notif);
            context.SaveChanges();
            return true;
        }

        public IEnumerable<IndividualCourseDto> GetAppliedCourses(string StudentEmail)
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           join c in context.Courses on s.Id equals c.MentorSkillId
                           where (c.StudentEmail == StudentEmail && c.IsRequested == true)
                           select new IndividualCourseDto
                           {
                               Name = t.Name,
                               Description = t.Description,
                               Fee = t.Fee,
                               ImageUrl = t.ImageUrl,
                               Duration = t.Duration,
                               MentorSkillId = s.Id,
                               Mentor = (
                                       from u in context.CustomUsers
                                       where (s.MentorEmail == u.Email)
                                       select new UserDto
                                       {
                                           Id = u.Id,
                                           Email = u.Email,
                                           Name = u.Name,
                                           Role = "Mentor",
                                           IsBlocked = u.IsBlocked,
                                           PhoneNumber = u.PhoneNumber
                                       }).FirstOrDefault(),
                               StartDate = s.StartDate.ToLongDateString(),
                               EndDate = s.EndDate.ToLongDateString()
                           }
                );
            return courses;
        }

        public IEnumerable<IndividualCourseDto> GetCompletedCourses(string StudentEmail)
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           join c in context.Courses on s.Id equals c.MentorSkillId
                           where (c.StudentEmail == StudentEmail && c.IsCompleted == true)
                           select new IndividualCourseDto
                           {
                               Name = t.Name,
                               Description = t.Description,
                               Fee = t.Fee,
                               ImageUrl = t.ImageUrl,
                               Duration = t.Duration,
                               MentorSkillId = s.Id,
                               Mentor = (
                                       from u in context.CustomUsers
                                       where (s.MentorEmail == u.Email)
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

        public IEnumerable<IndividualCourseDto> GetConfirmedCourses(string StudentEmail)
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           join c in context.Courses on s.Id equals c.MentorSkillId
                           where (c.StudentEmail == StudentEmail && c.IsConfirmed == true)
                           select new IndividualCourseDto
                           {
                               Name = t.Name,
                               Description = t.Description,
                               Fee = t.Fee,
                               ImageUrl = t.ImageUrl,
                               Duration = t.Duration,
                               MentorSkillId = s.Id,
                               Mentor = (
                                       from u in context.CustomUsers
                                       where (s.MentorEmail == u.Email)
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

        public IEnumerable<NotificationDto> GetNotifications(string email)
        {
            var nots = (from s in context.MentorSkills
                        join t in context.Technologies on s.TechId equals t.Id
                        join c in context.Courses on s.Id equals c.MentorSkillId
                        join n in context.Notifications on s.Id equals n.MentorSkillId
                        where (s.Id == n.MentorSkillId && n.StudentEmail == email && c.StudentEmail == email && n.IsStudent == true)
                        select new NotificationDto
                        {
                            NotiId = n.Id,
                            CourseName = t.Name,
                            Fee = t.Fee,
                            Mentor = (
                                    from u in context.CustomUsers
                                    where (s.MentorEmail == u.Email)
                                    select new UserDto
                                    {
                                        Email = u.Email,
                                        Name = u.Name
                                    }).FirstOrDefault(),
                            Type = n.Type,
                            CompletionStatus = n.CompletionStatus,
                            Commission = t.Commission
                        }
                );
            return nots;
        }

        public IEnumerable<IndividualCourseDto> GetRegisteredCourses(string StudentEmail)
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           join c in context.Courses on s.Id equals c.MentorSkillId
                           where (c.StudentEmail == StudentEmail && c.IsRegistered == true)
                           select new IndividualCourseDto
                           {
                               Name = t.Name,
                               Description = t.Description,
                               Fee = t.Fee,
                               ImageUrl = t.ImageUrl,
                               Duration = t.Duration,
                               MentorSkillId = s.Id,
                               Mentor = (
                                       from u in context.CustomUsers
                                       where (s.MentorEmail == u.Email)
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

        public IEnumerable<IndividualCourseDto> GetRejectedCourses(string StudentEmail)
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           join c in context.Courses on s.Id equals c.MentorSkillId
                           where (c.StudentEmail == StudentEmail && c.IsRejected == true)
                           select new IndividualCourseDto
                           {
                               Name = t.Name,
                               Description = t.Description,
                               Fee = t.Fee,
                               ImageUrl = t.ImageUrl,
                               Duration = t.Duration,
                               MentorSkillId = s.Id,
                               Mentor = (
                                       from u in context.CustomUsers
                                       where (s.MentorEmail == u.Email)
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

        public bool RegisterCourse(Course course)
        {
            var findcourse = context.Courses.Where(c => c.MentorSkillId == course.MentorSkillId && c.StudentEmail == course.StudentEmail).FirstOrDefault();
            findcourse.IsCompleted = false;
            findcourse.IsRegistered = true;
            findcourse.IsRejected = false;
            findcourse.IsRequested = false;
            findcourse.IsConfirmed = false;
            var result = context.SaveChanges();

            var noti = new Notification
            {
                StudentEmail = course.StudentEmail,
                MentorSkillId = course.MentorSkillId,
                Type = "register",
                IsStudent = false,
                IsMentor = true,
                CompletionStatus = 0
            };
            context.Notifications.Add(noti);
            context.SaveChanges();

            //Adding data to Payments table
            var mentorEmailQuery = (
                from s in context.MentorSkills
                join c in context.Courses on s.Id equals c.MentorSkillId
                where (c.MentorSkillId == course.MentorSkillId)
                select s).FirstOrDefault();

            var MentorEmail = mentorEmailQuery.MentorEmail;

            var mentorNameQuery = (from u in context.CustomUsers
                                   where (MentorEmail == u.Email)
                                   select u).FirstOrDefault();
            var MentorName = mentorNameQuery.Name;

            var studentNameQuery = (from u in context.CustomUsers
                                    where (course.StudentEmail == u.Email)
                                    select u).FirstOrDefault();
            var StudentName = studentNameQuery.Name;

            var payment = (
                            from s in context.MentorSkills
                            join t in context.Technologies on s.TechId equals t.Id
                            join c in context.Courses on s.Id equals c.MentorSkillId
                            where (s.Id == course.MentorSkillId && c.StudentEmail == course.StudentEmail)
                            select new Payment
                            {
                                Amount = t.Fee,
                                CourseName = t.Name,
                                TotalFee = t.Fee,
                                MentorEmail = s.MentorEmail,
                                StudentEmail = c.StudentEmail,
                                MentorName = MentorName,
                                StudentName = StudentName,
                                CompletionStatus = 0,
                                CourseCommision = t.Commission,
                                Type = "credit"
                            }
                ).FirstOrDefault();
            context.Payments.Add(payment);
            context.SaveChanges();

            //////////

            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public bool UpdateCourseRating(Course course)
        {
            var findCourse = context.Courses.Where(c => c.MentorSkillId == course.MentorSkillId && c.StudentEmail == course.StudentEmail).FirstOrDefault();
            findCourse.Rating = course.Rating;
            var result = context.SaveChanges();
            if (result > 0)
            {
                //Mentor rating update
                var avgRating = (int)context.Courses.Where(c => c.IsCompleted == true && c.MentorSkillId == course.MentorSkillId && c.StudentEmail == course.StudentEmail).Select(x => x.Rating).Average();

                var mentorEmailQuery = (
                    from s in context.MentorSkills
                    join c in context.Courses on s.Id equals c.MentorSkillId
                    where (c.MentorSkillId == course.MentorSkillId)
                    select s).FirstOrDefault();

                var MentorEmail = mentorEmailQuery.MentorEmail;

                var userMentor = (from u in context.CustomUsers
                                  where (MentorEmail == u.Email)
                                  select u).FirstOrDefault();
                userMentor.Rating = avgRating;
                context.SaveChanges();

                return true;
            }
            return false;
        }
    }
}

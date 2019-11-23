using AdminLibrary.DTOs;
using AdminLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AdminLibrary.Repositories
{
    public class AdminRepository : IAdminRepository
    {

        AdminDBContext context;
        public AdminRepository(AdminDBContext context)
        {
            this.context = context;
        }


        public bool BlockUnblockUser(string userId)
        {
            try
            {
                var appUser = context.CustomUsers.Where(u => u.Id == userId).FirstOrDefault();
                appUser.IsBlocked = !appUser.IsBlocked;
                context.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<UserDto> GetActiveUsersByRole(string roleId)
        {
            var users = (from u in context.CustomUsers
                         join r in context.UserRoles on u.Id equals r.UserId
                         where (r.RoleId == roleId && u.IsBlocked == false)
                         select new UserDto
                         {
                             Id = u.Id,
                             Email = u.Email,
                             Name = u.Name,
                             Role = r.RoleId,
                             IsBlocked = u.IsBlocked,
                             Experience = u.Experience,
                             PhoneNumber = u.PhoneNumber
                         });
            return users.ToList();
        }

        public IEnumerable<IndividualCourseDto> GetAdminDashIndividualCourses()
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           join c in context.Courses on s.Id equals c.MentorSkillId
                           where (c.IsRegistered == true)
                           select new IndividualCourseDto
                           {
                               Name = t.Name,
                               Description = t.Description,
                               Fee = t.Fee,
                               ImageUrl = t.ImageUrl,
                               Duration = t.Duration,
                               CompletionStatus = c.CompletionStatus,
                               MentorSkillId = s.Id,
                               Mentor = (
                                       from u in context.CustomUsers
                                       where (s.MentorEmail == u.Email)
                                       select new UserDto
                                       {
                                           Email = u.Email,
                                           Name = u.Name,
                                           Role = "Mentor"
                                       }).FirstOrDefault(),
                               Student = (
                                       from u in context.CustomUsers
                                       where (c.StudentEmail == u.Email)
                                       select new UserDto
                                       {
                                           Email = u.Email,
                                           Name = u.Name,
                                           Role = "Mentor"
                                       }).FirstOrDefault(),
                               StartDate = s.StartDate.ToLongDateString(),
                               EndDate = s.EndDate.ToLongDateString()
                           }
    );
            return courses;
        }

        public IEnumerable<CourseDto> GetAllCourses()
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           select new CourseDto
                           {
                               Name = t.Name,
                               Description = t.Description,
                               Fee = t.Fee,
                               ImageUrl = t.ImageUrl,
                               Duration = t.Duration,
                               Commission = t.Commission,
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
                                           Rating = u.Rating,
                                           Experience = u.Experience
                                       }).FirstOrDefault(),
                               StartDate = s.StartDate.ToLongDateString(),
                               EndDate = s.EndDate.ToLongDateString()
                           }
                );
            return courses;
        }

        public IEnumerable<Payment> GetAllPayments()
        {
            var payments = context.Payments;
            return payments;
        }

        public IEnumerable<UserDto> GetBlockedUsersByRole(string roleId)
        {
            var users = (from u in context.CustomUsers
                         join r in context.UserRoles on u.Id equals r.UserId
                         where (r.RoleId == roleId && u.IsBlocked == true)
                         select new UserDto
                         {
                             Id = u.Id,
                             Email = u.Email,
                             Name = u.Name,
                             Role = r.RoleId,
                             IsBlocked = u.IsBlocked,
                             Rating = u.Rating,
                             Experience = u.Experience,
                             PhoneNumber = u.PhoneNumber
                         });
            return users.ToList();
        }

        public IEnumerable<CourseDto> GetSearchData(string searchString)
        {
            var courses = (from s in context.MentorSkills
                           join t in context.Technologies on s.TechId equals t.Id
                           where (t.Name.Contains(searchString))
                           select new CourseDto
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
                                           Rating = u.Rating,
                                           Experience = u.Experience
                                       }).FirstOrDefault(),
                               StartDate = s.StartDate.ToLongDateString(),
                               EndDate = s.EndDate.ToLongDateString()
                           }
               );
            return courses;
        }

        public IEnumerable<Technology> GetTechnologies()
        {
            var techs = context.Technologies;
            return techs;
        }

        public bool RegisterTechnology(Technology technology)
        {
            try
            {
                context.Technologies.Add(technology);
                context.SaveChanges();
                return true;

            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool UpdateTechnology(Technology technology)
        {
            context.Technologies.Update(technology);
            var result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

    }
}

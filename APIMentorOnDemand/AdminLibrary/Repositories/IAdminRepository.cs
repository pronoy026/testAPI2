using AdminLibrary.DTOs;
using AdminLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdminLibrary.Repositories
{
    public interface IAdminRepository
    {
        IEnumerable<UserDto> GetActiveUsersByRole(string roleId);
        IEnumerable<UserDto> GetBlockedUsersByRole(string roleId);
        IEnumerable<CourseDto> GetAllCourses();
        IEnumerable<Payment> GetAllPayments();
        bool RegisterTechnology(Technology technology);
        bool BlockUnblockUser(string userId);

        IEnumerable<CourseDto> GetSearchData(string searchString);
        IEnumerable<Technology> GetTechnologies();
        bool UpdateTechnology(Technology technology);
        IEnumerable<IndividualCourseDto> GetAdminDashIndividualCourses();
    }
}

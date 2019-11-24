using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentLibrary.Models;
using StudentLibrary.Repositories;

namespace StudentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class StudentController : ControllerBase
    {

        IStudentRepository repository;
        public StudentController(IStudentRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/Student
        [HttpPost("checkcourse")]
        public IActionResult CheckCourse([FromBody] Course course)
        {
            var result = repository.CheckCourse(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("applyforcourse")]
        public IActionResult ApplyCourse([FromBody] Course course)
        {
            var result = repository.ApplyCourse(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("ratecourse")]
        public IActionResult RateCourse([FromBody] Course course)
        {
            var result = repository.UpdateCourseRating(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("getappliedcourses/{email}")]
        public IActionResult GetAppliedCourses(string email)
        {
            var courses = repository.GetAppliedCourses(email);
            return Ok(courses);
        }

        [HttpGet("getrejectedcourses/{email}")]
        public IActionResult GetRejectedCourses(string email)
        {
            var courses = repository.GetRejectedCourses(email);
            return Ok(courses);
        }

        [HttpGet("getregisteredcourses/{email}")]
        public IActionResult GetRegisteredCourses(string email)
        {
            var courses = repository.GetRegisteredCourses(email);
            return Ok(courses);
        }

        [HttpGet("getcompletedcourses/{email}")]
        public IActionResult GetCompletedCourses(string email)
        {
            var courses = repository.GetCompletedCourses(email);
            return Ok(courses);
        }

        [HttpGet("getconfirmedcourses/{email}")]
        public IActionResult GetConfirmedCourses(string email)
        {
            var courses = repository.GetConfirmedCourses(email);
            return Ok(courses);
        }

        // POST: api/Student
        [HttpPost("coursecompletionstatusupdate")]
        public IActionResult CourseCompletionStatusUpdate([FromBody] Course course)
        {
            var result = repository.CourseCompletionStatusUpdate(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("coursecompletionupdate")]
        public IActionResult CourseCompletionUpdate([FromBody] Course course)
        {
            var result = repository.CourseCompletionUpdate(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("registercourse")]
        public IActionResult RegisterCourse([FromBody] Course course)
        {
            var result = repository.RegisterCourse(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("getnotifications/{email}")]
        public IActionResult GetNotifications(string email)
        {
            var nots = repository.GetNotifications(email);
            return Ok(nots);
        }

        [HttpGet("deletenotifications/{email}")]
        public IActionResult DeleteNotifications(string email)
        {
            var result = repository.DeleteNotifications(email);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("deletenotificationbyid/{id}")]
        public IActionResult DeleteNotificationById(int id)
        {
            var result = repository.DeleteNotificationById(id);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("courseinfo/{email}")]
        public IActionResult GetCoursesInfo(string email)
        {
            var info = repository.CourseInfo(email);
            return Ok(info);
        }

        [HttpGet("studentinfo/{email}")]
        public IActionResult StudentInfo(string email)
        {
            var info = repository.UserInfo(email);
            return Ok(info);
        }

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

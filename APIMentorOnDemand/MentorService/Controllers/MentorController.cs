using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MentorLibrary.Models;
using MentorLibrary.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MentorController : ControllerBase
    {
        IMentorRepository repository;
        public MentorController(IMentorRepository repository)
        {
            this.repository = repository;
        }

        // GET: api/Mentor
        [HttpGet("gettechs")]
        public IActionResult Get()
        {
            var techs = repository.GetTechnologies();
            return Ok(techs);
        }
        //for checkin' if mentor skill already exists
        [HttpPost("mentorskillexists")]
        public IActionResult MentorSkillExists([FromBody] MentorSkill mentorSkill)
        {
            var result = repository.MentorSkillExists(mentorSkill.TechId, mentorSkill.MentorEmail);
            if (result)
            {
                return BadRequest("The Course is already created by you!");
            }
            return Ok();
        }

        // POST: api/Mentor
        [HttpPost("creatementorskill")]
        public IActionResult Post([FromBody] MentorSkill mentorSkill)
        {
            var result = repository.CreateSkill(mentorSkill);
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

        [HttpGet("getrejectedcourses/{email}")]
        public IActionResult GetRejectedCourses(string email)
        {
            var courses = repository.GetRejectedCourses(email);
            return Ok(courses);
        }

        [HttpGet("getconfirmedcourses/{email}")]
        public IActionResult GetConfirmedCourses(string email)
        {
            var courses = repository.GetConfirmedCourses(email);
            return Ok(courses);
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

        [HttpGet("courseinfo/{email}")]
        public IActionResult GetCoursesInfo(string email)
        {
            var info = repository.CourseInfo(email);
            return Ok(info);
        }

        [HttpGet("mentorinfo/{email}")]
        public IActionResult MentorInfo(string email)
        {
            var info = repository.UserInfo(email);
            return Ok(info);
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


        [HttpPost("acceptcourse")]
        public IActionResult AcceptCourse([FromBody] Course course)
        {
            var result = repository.AcceptCourse(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("rejectcourse")]
        public IActionResult RejectCourse([FromBody] Course course)
        {
            var result = repository.RejectCourse(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("getpaymentrecords/{email}")]
        public IActionResult GetPaymentRecords(string email)
        {
            var payments = repository.GetPaymentRecords(email);
            return Ok(payments);

        }



        // PUT: api/Mentor/5
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

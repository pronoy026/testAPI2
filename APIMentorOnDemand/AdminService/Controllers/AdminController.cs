using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminLibrary.DTOs;
using AdminLibrary.Models;
using AdminLibrary.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {


        IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }


        // GET: api/Admin
        [HttpGet("getactiveusers/{id}")]
        public IEnumerable<UserDto> GetActiveUsersByRole(string id)
        {
            var users = repository.GetActiveUsersByRole(id);
            return users;
        }

        [HttpGet("blockunblockuser/{id}")]
        public IActionResult BlockUnblockUser(string id)
        {
            var result = repository.BlockUnblockUser(id);
            return Ok(result);
        }

        [HttpGet("getblockedusers/{id}")]
        public IEnumerable<UserDto> GetBlockedUsersByRole(string id)
        {
            var users = repository.GetBlockedUsersByRole(id);
            return users;
        }

        [HttpGet("getallcourses")]
        public IActionResult GetAllCourses()
        {
            var courses = repository.GetAllCourses();
            return Ok(courses);
        }

        [HttpGet("getsearchdata/{searchString}")]
        public IActionResult GetSearchData(string searchString)
        {
            var courses = repository.GetSearchData(searchString);
            return Ok(courses);
        }

        [HttpGet("getallpayments")]
        public IActionResult GetAllPayments()
        {
            var payments = repository.GetAllPayments();
            return Ok(payments);
        }

        //get all techs
        [HttpGet("getalltechs")]
        public IActionResult GetAllTechs()
        {
            var techs = repository.GetTechnologies();
            return Ok(techs);
        }

        //get indivdual courses containing user - mentor data

        [HttpGet("getindividualcourses")]
        public IActionResult GetIndividualCourses()
        {
            var courses = repository.GetAdminDashIndividualCourses();
            return Ok(courses);
        }

        //update tech
        [HttpPost("updatetech")]
        public IActionResult UpdateTech([FromBody] Technology technology)
        {
            var result = repository.UpdateTechnology(technology);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        // POST: api/Admin
        [HttpPost("registertech")]
        public IActionResult Post([FromBody] Technology technology)
        {
            var result = repository.RegisterTechnology(technology);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

    }
}

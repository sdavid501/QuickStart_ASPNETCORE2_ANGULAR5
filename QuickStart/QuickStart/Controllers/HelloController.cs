using System;
using Microsoft.AspNetCore.Mvc;

namespace APP.Controllers
{
    [Route("api/[Controller]")]
    public class HelloController : Controller
    {
        [HttpGet]
        public JsonResult Greetings() {
            // Object w = {msg:"Hello from ASP.NET Core Web API.."};
            return Json("Hello from ASP.NET Core Web API..");
        }
    }
}
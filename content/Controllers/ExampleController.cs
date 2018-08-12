using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace OliverCoding.GatsbyTemplate.Controllers
{
    [Route("api/[controller]")]
    public class ExampleController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Day> UpcomingWeek()
        {
            return Enumerable.Range(0, 6).Select(index =>  new Day {
                DayOfWeek = DateTime.Today.AddDays(index).DayOfWeek.ToString(),
                Date = DateTime.Today.AddDays(index).ToShortDateString()
            });
        }

        public class Day {
            public string DayOfWeek { get; set; }
            public string Date { get; set; }
        }
    }
}

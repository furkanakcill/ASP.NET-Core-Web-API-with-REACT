using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EventWebApi.Models
{
    public class Category
    {       
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsStatus { get; set; }

        public List<Event>? Events { get; set; }
    }
}

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EventWebApi.Models
{
    public class Event
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public bool IsStatus { get; set; }
        public string Organizer { get; set; }

        public int CategoryId { get; set; }
        public Category? Category { get; set; }

        public List<EventUser>? EventUsers { get; set; }

    }
}

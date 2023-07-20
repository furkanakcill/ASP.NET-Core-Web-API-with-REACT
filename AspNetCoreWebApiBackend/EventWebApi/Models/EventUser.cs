using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EventWebApi.Models
{
    public class EventUser
    {
        public int Id { get; set; }

        public int EventId { get; set; }
        public Event? Event { get; set; }

        public int UserId { get; set; }
        public User? User { get; set; }
    }
}

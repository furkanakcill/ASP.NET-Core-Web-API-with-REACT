using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace EventWebApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Event> Events { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<EventUser> EventUsers { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}

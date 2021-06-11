using System;

namespace MovieLibrary.Models
{
    public class MovieModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime Date_Aired { get; set; }
        public int Rating { get; set; }
        public bool DVD { get; set; }
    }
}

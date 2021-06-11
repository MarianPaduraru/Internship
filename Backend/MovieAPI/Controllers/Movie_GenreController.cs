using Microsoft.AspNetCore.Mvc;
using MovieBLL.Services;
using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Movie_GenreController : ControllerBase
    {
        private Movie_GenreService Movie_GenreService { get; }

        public Movie_GenreController(Movie_GenreService movie_GenreService)
        {
            Movie_GenreService = movie_GenreService;
        }

        /// <summary>
        /// Gets all the movies
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<Movie_GenreModel> GetAllMovie_Genre()
        {
            return Movie_GenreService.GetAll();
        }

        /// <summary>
        /// Saves a new movie
        /// </summary>
        /// <param name="movie">the movie that needs to be saved</param>
        /// <returns></returns>
        [HttpPost]
        public int SaveMovie(MovieModel movie)
        {
            return 4;
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using MovieBLL.Services;
using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private MoviesService MoviesService { get; }

        public MoviesController(MoviesService moviesService)
        {
            MoviesService = moviesService;
        }

        /// <summary>
        /// Gets all the movies
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<MovieModel> GetAllMovies()
        {
            return MoviesService.GetAll();
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

using Microsoft.AspNetCore.Mvc;
using MovieBLL.Services;
using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private GenreService GenreService { get; }

        public GenresController(GenreService genreService)
        {
            GenreService = genreService;
        }

        /// <summary>
        /// Gets all the movies
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<GenreModel> GetAllGenres()
        {
            return GenreService.GetAll();
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

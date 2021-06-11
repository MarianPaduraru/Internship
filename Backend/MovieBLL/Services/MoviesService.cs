using MovieDAL.Repositories;
using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieBLL.Services
{
    public class MoviesService
    {
        private IMoviesRepository MoviesRepository { get; }

        public MoviesService(IMoviesRepository moviesRepository)
        {
            MoviesRepository = moviesRepository;
        }

        public List<MovieModel> GetAll()
        {
            return MoviesRepository.GetAll();
        }
    }
}

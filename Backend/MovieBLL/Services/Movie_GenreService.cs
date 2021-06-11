using MovieDAL.Repositories;
using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieBLL.Services
{
    public class Movie_GenreService
    {
        private IMovie_GenreRepository Movie_GenreRepository { get; }

        public Movie_GenreService(IMovie_GenreRepository movie_GenreRepository)
        {
            Movie_GenreRepository = movie_GenreRepository;
        }

        public List<Movie_GenreModel> GetAll()
        {
            return Movie_GenreRepository.GetAll();
        }
    }
}

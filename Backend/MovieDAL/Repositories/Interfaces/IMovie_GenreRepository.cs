using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieDAL.Repositories
{
    public interface IMovie_GenreRepository
    {
        public List<Movie_GenreModel> GetAll();
        public int Save(Movie_GenreModel model);
    }
}

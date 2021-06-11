using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieDAL.Repositories
{
    public interface IMoviesRepository
    {
        public List<MovieModel> GetAll();
        public int Save(MovieModel model);
    }
}

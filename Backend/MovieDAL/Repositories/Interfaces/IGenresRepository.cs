using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieDAL.Repositories
{
    public interface IGenresRepository
    {
        public List<GenreModel> GetAll();
        public int Save(GenreModel model);
    }
}

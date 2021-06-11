using MovieDAL.Repositories;
using MovieLibrary.Models;
using System.Collections.Generic;

namespace MovieBLL.Services
{
    public class GenreService
    {
        private IGenresRepository GenresRepository { get; }

        public GenreService(IGenresRepository genresRepository)
        {
            GenresRepository = genresRepository;
        }

        public List<GenreModel> GetAll()
        {
            return GenresRepository.GetAll();
        }
    }
}

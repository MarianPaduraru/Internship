using Microsoft.Extensions.Options;
using MovieLibrary;
using MovieLibrary.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace MovieDAL.Repositories
{
    public class Movie_GenreRepository : IMovie_GenreRepository
    {
        private CustomApplicationSettings CustomApplicationSettings { get; }

        public Movie_GenreRepository(IOptions<CustomApplicationSettings> customApplicationSettings)
        {
            CustomApplicationSettings = customApplicationSettings.Value;
        }

        public List<Movie_GenreModel> GetAll()
        {
            string connectionString = "Server=tcp:mariandbserver.database.windows.net,1433;Initial Catalog=MovieDatabase;Persist Security Info=False;User ID=marianadmin;Password=Stricatule1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            var connection = new SqlConnection(connectionString);
            connection.Open();

            string getAllGenre_MovieQuery = "select * from Movies_Genres";
            SqlCommand command = new SqlCommand(getAllGenre_MovieQuery, connection);
            SqlDataReader reader = command.ExecuteReader();
            var List = new List<Movie_GenreModel>();
            while (reader.Read())
                List.Add(
                    new Movie_GenreModel
                    {
                        ID_Movie = reader.GetInt32(0),
                        ID_Genre = reader.GetInt32(1),
                    }
                    );
            reader.Close();
            connection.Close();
            return List;
        }

        public int Save(Movie_GenreModel model)
        {
            throw new NotImplementedException();
        }
    }
}

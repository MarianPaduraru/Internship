using Microsoft.Extensions.Options;
using MovieLibrary;
using MovieLibrary.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace MovieDAL.Repositories
{
    public class GenresRepository : IGenresRepository
    {
        private CustomApplicationSettings CustomApplicationSettings { get; }

        public GenresRepository(IOptions<CustomApplicationSettings> customApplicationSettings)
        {
            CustomApplicationSettings = customApplicationSettings.Value;
        }

        public List<GenreModel> GetAll()
        {
            string connectionString = "Server=tcp:mariandbserver.database.windows.net,1433;Initial Catalog=MovieDatabase;Persist Security Info=False;User ID=marianadmin;Password=Stricatule1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            var connection = new SqlConnection(connectionString);
            connection.Open();

            string getAllMoviesQuery = "select * from Genres";
            SqlCommand command = new SqlCommand(getAllMoviesQuery, connection);
            SqlDataReader reader = command.ExecuteReader();
            var List = new List<GenreModel>();
            while (reader.Read())
                List.Add(
                    new GenreModel
                    {
                        ID = reader.GetInt32(0),
                        Name = reader.GetString(1),
                    }
                    );
            reader.Close();
            connection.Close();
            return List;
        }

        public int Save(GenreModel model)
        {
            throw new NotImplementedException();
        }
    }
}

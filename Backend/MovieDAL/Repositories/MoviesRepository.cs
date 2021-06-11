using Microsoft.Extensions.Options;
using MovieLibrary;
using MovieLibrary.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace MovieDAL.Repositories
{
    public class MoviesRepository : IMoviesRepository
    {
        private CustomApplicationSettings CustomApplicationSettings { get; }

        public MoviesRepository(IOptions<CustomApplicationSettings> customApplicationSettings)
        {
            CustomApplicationSettings = customApplicationSettings.Value;
        }

        public List<MovieModel> GetAll()
        {
            string connectionString ="Server=tcp:mariandbserver.database.windows.net,1433;Initial Catalog=MovieDatabase;Persist Security Info=False;User ID=marianadmin;Password=Stricatule1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            var connection = new SqlConnection(connectionString);
            connection.Open();
            string getAllMoviesQuery = "select * from Movies";
            SqlCommand command = new SqlCommand(getAllMoviesQuery,connection);
            SqlDataReader reader = command.ExecuteReader();
            var List = new List<MovieModel>();
            while (reader.Read())
                List.Add(
                    new MovieModel
                    {
                        ID = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        Date_Aired = reader.GetDateTime(2),
                        DVD = reader.GetBoolean(3),
                        Rating = reader.GetInt32(4)
                    }
                    );
            reader.Close();
            connection.Close();
            return List;
        }

        public int Save(MovieModel model)
        {
            throw new NotImplementedException();
        }
    }
}


// Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод,
// який виводить на екран список фільмів у вибраному жанрі.


const movies = {
    action: ['Die Hard', 'John Wick', 'The Matrix'],
    comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
    drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
    horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],
  
    
    listMoviesByGenre: function (genre) {
      const genreLowerCase = genre.toLowerCase(); 
  
      if (this[genreLowerCase]) {
       
        const moviesInGenre = this[genreLowerCase];
        console.log(`Фільми в жанрі "${genre}":`);
        moviesInGenre.forEach((movie, index) => {
          console.log(`${index + 1}. ${movie}`);
        });
      } else {
        console.log(`Жанр "${genre}" не знайдено.`);
      }
    },
  };
  
 
  movies.listMoviesByGenre('comedy');
  
  
  movies.listMoviesByGenre('sci-fi');
  
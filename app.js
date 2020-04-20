const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
   
  });

// Movie Model
class Movie extends Sequelize.Model {}
Movie.init({
    title: Sequelize.STRING
}, { sequelize });


// async IIFE (Immediately Invoked Function EXpression)
(async () => {
    //Sync "Movies" table
    await sequelize.sync({ force: true });

    try {
       // Instance of the Movie class represents a DB row
       const movie = await Movie.create({
           title: 'Silent Hill',
       });
       console.log(movie.toJSON());

    } catch (error) {
        console.log('Error connecting to the database: ', error);

    }

})();
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
        // await sequelize.authenticate();
        // console.log('Connection to the database succesful!');

    } catch (error) {
        console.log('Error connecting to the database: ', error);

    }

})();
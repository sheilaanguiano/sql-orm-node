const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
  });

// async IIFE (Immediately Invoked Function EXpression)
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database succesful!');

    } catch (error) {
        console.log('Error connecting to the database: ', error);

    }

})();
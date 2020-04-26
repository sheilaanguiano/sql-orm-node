const db = require('./db');
const { Movie, Person } = db.models;


(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Silent Hill',
      runtime: 125,
      releaseDate: '2006-04-21',
      isAvailableOnVHS: false,
    });
    //console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: 'Old boy',
      runtime: 120,
      releaseDate: '2003-11-21',
      isAvailableOnVHS: false,

    });
    //console.log(movie2.toJSON());

    const actor = await Person.create({
      firstName: 'Min-sik',
      lastName: 'Choi'
    });
    //console.log(actor.toJSON());

      // New instance
    const movie3 = await Movie.build({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    //console.log(movie3.toJSON());

    const movieById = await Movie.findByPk();
    const movieByRuntime = await Movie.findOne({ 
      where: { runtime: 120 }
    });
    const allMovies = await. Movie.findAll();
    console.log( movies.map(movie => movie.toJSON()) );
   

  } catch (error) {
    if (error.name === 'SequelizeValidationError') { 
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors)
    } else {
      throw error;

    }
    console.error('Error connecting to the database: ', error);
  }
})();
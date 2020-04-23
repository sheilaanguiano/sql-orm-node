const db = require('./db');
const { Movie } = db.models;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Silent Hill',
      runtime: 125,
      releaseDate: '2006-04-21',
      isAvailableOnVHS: false,
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: 'Old boy',
      runtime: 120,
      releaseDate: '2003-11-21',
      isAvailableOnVHS: false,

    });
    console.log(movie2.toJSON());

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
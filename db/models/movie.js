const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    // Set custom primary key column
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { 
      type: Sequelize.STRING,
      allowNull: false, //disallow null
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
     },
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
     },
    isAvailableOnVHS: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
     },
  }, { sequelize });

  return Movie;
};
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
      validate: {
        notNull: {
          msg: 'Please provide a value for "title"'
        },
        notEmpty: {
          //custom error message
          msg: 'Please provide a value for "title"',
        },
       },
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "runtime"'
        }
       },
       min: {
         args: 1, //This validates that the runtime is longer than 1 min
         msg: 'Please provide a value greater than "0" for "runtime"'
       },
     },
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "release Date"'
        },
        isAfter: {
          args: '1895-12-27',
          msg: 'Please provide a value on or after "1895-12-27" for "releaseDate"'
        }
       },
     },
    isAvailableOnVHS: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
     },
  }, { sequelize });

  return Movie;
};
module.exports = function(sequelize, DataTypes) {
  var Heat = sequelize.define("Heat", {
          temp: 		DataTypes.STRING
    });

  return Heat;
};
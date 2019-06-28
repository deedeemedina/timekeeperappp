module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    name: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating User with TimeEntry
    // When a User is deleted, also delete any associated TimeEntry
    User.hasMany(models.TimeEntry, {
      onDelete: "cascade"
    });
  };

  return User;
};

module.exports = function(sequelize, DataTypes) {
  var TimeEntry = sequelize.define("TimeEntry", {
    hoursWorked: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  TimeEntry.associate = function(models) {
    // We're saying that a TimeEntry should belong to an User
    // A TimeEntry can't be created without an User due to the foreign key constraint
    TimeEntry.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return TimeEntry;
};

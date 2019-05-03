module.exports = function(sequelize, DataTypes) {
  // var Post = sequelize.define("Post", {
  //   title: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       len: [1]
  //     }
  //   },
  //   body: {
  //     type: DataTypes.TEXT,
  //     allowNull: false,
  //     validate: {
  //       len: [1]
  //     }
  //   },
  //   category: {
  //     type: DataTypes.STRING,
  //     defaultValue: "Personal"
  //   }
  // });

  var Rpi = sequelize.define("Rpi", {
    light: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    temp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    }
  });

  return Rpi;
  
};

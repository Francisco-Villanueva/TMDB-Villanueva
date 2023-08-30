const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");
class Favorites extends Model {}

Favorites.init(
  {
    idMovie: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelize,
    modelName: "favorites",
    timestamps: false,
  }
);
module.exports = { Favorites };

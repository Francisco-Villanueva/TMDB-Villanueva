const { Favorites } = require("./Favorites");
const { Movies } = require("./Movies");
const { Playlist } = require("./Playlist");
const { User } = require("./User");

User.hasMany(Favorites, { as: "user-favorite" });
User.hasMany(Playlist, { as: "user-playlist" });
Playlist.hasMany(Movies, { as: "playlist-movie" });

module.exports = {
  User,
};

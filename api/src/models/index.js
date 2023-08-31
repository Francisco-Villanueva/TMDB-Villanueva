const { Favorites } = require("./Favorites");
const { Movies } = require("./Movies");
const { Playlist } = require("./Playlist");
const { User } = require("./User");

User.hasMany(Favorites, { as: "user_favorite" });
User.hasMany(Playlist, { as: "user_playlist" });
Playlist.hasMany(Movies, { as: "playlist_movie" });

module.exports = {
  User,
};

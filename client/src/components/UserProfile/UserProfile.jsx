import React, { useContext, useState } from "react";
import Favorites from "./Favorites/Favorites";
import { UserContext } from "../../context/UserContext";
import List from "../List/List";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PlaylistCard from "./PlaylistCard/PlaylistCard";
export default function UserProfile() {
  const { user, favorites_movie, favorites_tv, createPlaylist } =
    useContext(UserContext);
  // console.log(favorites_movie, favorites_tv);

  console.log(user);
  const [playlist_name, setPlayListName] = useState("");

  const handleInputPlaylist = (e) => {
    setPlayListName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPlaylist(user.id, playlist_name);
    setPlayListName("");
  };
  return (
    <div className="userProfile_main">
      <button className="btn_back">
        <Link to={"/"} style={{ color: "unset" }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </button>
      <br />

      <Divider>
        <h3>Profile</h3>
      </Divider>
      <UserCard user={user} />

      <div className="playlists_favorites_section">
        <div className="child1">
          <Divider sx={{ width: "10%" }}>
            <h3>Favorites</h3>
          </Divider>
          <div className="userProfiler_favorites_section">
            <div className="favoriteList_container">
              <List
                list_name={" Movies"}
                movies_list={favorites_movie}
                type={"movie"}
              />
            </div>
            <div className="favoriteList_container">
              <List
                list_name={" Tv Series"}
                movies_list={favorites_tv}
                type={"tv"}
              />
            </div>
          </div>
        </div>
        <div className="child2">
          <Divider>
            <h3>Playlist</h3>
          </Divider>
          <div className="userProfiler_playlist_section">
            <form className="form_newPlaylist" onSubmit={handleSubmit}>
              <input
                className="newPlaylis_input"
                type="text"
                value={playlist_name}
                placeholder="Playlist Name..."
                onChange={handleInputPlaylist}
              />
              <button className="newPlaylis_btn"> + </button>
            </form>
            <div className="playlist_container">
              {user.user_playlist?.length ? (
                user.user_playlist.map((e) => <PlaylistCard playlist={e} />)
              ) : (
                <p>No playlists !</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

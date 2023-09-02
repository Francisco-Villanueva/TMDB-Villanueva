import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";
import { UserContext } from "../../../context/UserContext";
import { Chip } from "@mui/material";
import PlaylistCard from "./PlaylistCard";
import { message } from "antd";

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];

function renderItem({ item, handleRemoveFruit }) {
  // console.log(item);
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item.name} />
    </ListItem>
  );
}

export default function CardsContainer({}) {
  const { createPlaylist, user, deletePlaylist } = useContext(UserContext);
  const { user_playlist: playlists } = user;
  const [playlist_name, setPlayListName] = useState("");

  const handleInputPlaylist = (e) => {
    setPlayListName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (playlist_name !== "") {
      createPlaylist(user.id, playlist_name);
      setPlayListName("");
    } else {
      message.warning("Please enter a name for playlist!", 2);
    }
  };

  const handleDeletePlaylist = (idPlaylist) => {
    deletePlaylist(user.id, idPlaylist);
  };

  return (
    <div className="playlist_container">
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
      <TransitionGroup>
        {playlists[0] ? (
          playlists.map((item) => (
            <Collapse key={item.id}>
              <PlaylistCard
                playlist={item}
                handleRemove={handleDeletePlaylist}
              />
            </Collapse>
          ))
        ) : (
          <>
            <span>No playlists ...</span>
          </>
        )}
      </TransitionGroup>
    </div>
  );
}

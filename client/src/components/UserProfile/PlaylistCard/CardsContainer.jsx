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
  const { createPlaylist, user } = useContext(UserContext);

  const [playlist_name, setPlayListName] = useState("");

  const handleInputPlaylist = (e) => {
    setPlayListName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPlaylist(user.id, playlist_name);
    setPlayListName("");
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
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
        {user.user_playlist.map((item) => (
          <Collapse key={item.id}>
            <PlaylistCard playlist={item} />
          </Collapse>
        ))}
      </TransitionGroup>
    </div>
  );
}

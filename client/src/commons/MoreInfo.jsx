import React, { useContext } from "react";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { message } from "antd";
import { UserContext } from "../context/UserContext";

export default function MoreInfo({
  size,
  font,
  showInfo,
  handlePause,
  title,
  onlyFav = false,
  id,
}) {
  const { user, addToFavorites } = useContext(UserContext);
  const handleClick = () => {
    showInfo();
    if (handlePause) handlePause();
  };

  const handelFavorites = () => {
    if (!user.name) {
      message.warning(`Log in to add to favorites.`);
    } else {
      addToFavorites(user.id, id);
      message.success(`${title} added to your favorites !`);
    }
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 0.5, border: "none", p: ".5em 0" } }}>
      {!onlyFav && (
        <Fab
          onClick={handleClick}
          color="primary"
          aria-label="add"
          sx={{ width: size, height: size, minHeight: "1px", p: 2 }}
        >
          <InfoOutlinedIcon sx={{ fontSize: font || 20 }} />
        </Fab>
      )}
      <Fab
        onClick={handelFavorites}
        aria-label="like"
        color="info"
        sx={{ width: size, height: size, minHeight: "1px", p: 2 }}
      >
        <FavoriteIcon sx={{ fontSize: font || 20 }} />
      </Fab>
    </Box>
  );
}

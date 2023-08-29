import React from "react";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NavigationIcon from "@mui/icons-material/Navigation";
import InfoIcon from "@mui/icons-material/Info";

export default function MoreInfo({
  size,
  font,
  showInfo,
  handlePause,
  onlyFav = false,
}) {
  const handleClick = () => {
    showInfo();
    if (handlePause) handlePause();
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
        aria-label="like"
        color="info"
        sx={{ width: size, height: size, minHeight: "1px", p: 2 }}
      >
        <FavoriteIcon sx={{ fontSize: font || 20 }} />
      </Fab>
    </Box>
  );
}

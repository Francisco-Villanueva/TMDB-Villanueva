import React from "react";
import Badge from "@mui/material/Badge";
// import MailIcon from '@mui/icons-material/Mail';
import MovieIcon from "@mui/icons-material/MovieFilterSharp";
import TvIcon from "@mui/icons-material/TvSharp";
import { Popover } from "antd";

export default function FavoriteBadge({ tvCount, movieCount }) {
  return (
    <>
      <Badge sx={{ m: "0 10px" }} badgeContent={movieCount} color="warning">
        <MovieIcon color="primary" />
      </Badge>

      <Badge sx={{ m: "0 10px" }} badgeContent={tvCount} color="warning">
        <TvIcon color="primary" />
      </Badge>
    </>
  );
}

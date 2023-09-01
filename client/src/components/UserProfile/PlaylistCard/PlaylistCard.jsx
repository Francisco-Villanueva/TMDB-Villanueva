import { Chip } from "@mui/material";
import React from "react";

export default function PlaylistCard({ playlist }) {
  console.log({ playlist });
  const { name, playlist_movie } = playlist;
  return (
    <div className="playlistCard_main">
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Chip
          label={name.slice(0, 1).toUpperCase()}
          style={{ background: "#FFF" }}
        />
        <h2>{name}</h2>
      </div>

      <span>
        <b> {playlist_movie.length} </b> | movies
      </span>
    </div>
  );
}

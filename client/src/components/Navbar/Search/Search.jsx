import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: "0", display: "flex", alignItems: "center", width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Spider Man, Fast & Four..."
        autoComplete="true"
        // inputProps={{ "aria-label": "Spider Man, Fast & Four..." }}
      />
      <IconButton type="button" sx={{ p: "0" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

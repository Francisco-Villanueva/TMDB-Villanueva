import React, { useCallback, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useSearch from "../../../hooks/useSearch";
import debounce from "just-debounce-it";
import { useMovies } from "../../../hooks/useMovies";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search({ search, setSearch, moviesHook }) {
  const [sort, setSort] = useState(false);

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    []
  );
  const { movies, getMovies, loading } = moviesHook;
  const handleSumbit = (e) => {
    e.preventDefault();
    // console.log("buscar ", search);
    getMovies({ search });
  };
  const handleInputChange = (e) => {
    // console.log(e);
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearch(newQuery);
    debouncedGetMovies(newQuery);
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSumbit}
      sx={{ p: "0", display: "flex", alignItems: "center", width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Spider Man, Fast & Four..."
        autoComplete="true"
        onChange={handleInputChange}
        value={search}
        // inputProps={{ "aria-label": "Spider Man, Fast & Four..." }}
      />
      <IconButton
        type="button"
        sx={{ p: "0" }}
        aria-label="search"
        onClick={handleSumbit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

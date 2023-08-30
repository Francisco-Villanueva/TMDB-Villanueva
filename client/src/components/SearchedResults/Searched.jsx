import React, { useState } from "react";
import List from "../List/List";
import Loading from "../../commons/Loading";
import { Box } from "@mui/material";

export default function Searched({ busqueda, movies_list }) {
  return (
    <Box
      sx={{
        height: "80vh",
        mt: "30px",
      }}
    >
      <br />

      {movies_list?.movies ? (
        <List
          list_name={`Movies:  ${busqueda}  | ${movies_list?.movies?.length} results`}
          movies_list={movies_list?.movies}
        />
      ) : (
        <Loading />
      )}
      {movies_list?.tv ? (
        <List
          list_name={`Tv:  ${busqueda}  | ${movies_list?.tv?.length} results`}
          movies_list={movies_list?.tv}
        />
      ) : (
        <Loading />
      )}
    </Box>
  );
}

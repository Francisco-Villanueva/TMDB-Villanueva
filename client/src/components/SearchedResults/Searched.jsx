import React, { useContext, useState } from "react";
import List from "../List/List";
import Loading from "../../commons/Loading";
import { Box } from "@mui/material";
import { SearchContext } from "../../context/SearchContext";

export default function Searched({ busqueda, movies_list }) {
  const { loading } = useContext(SearchContext);
  console.log({ loading });
  return (
    <Box
      sx={{
        minHeight: "80vh",
        mt: "30px",
      }}
    >
      <br />

      {loading ? (
        <>
          <List
            list_name={`Movies:  ${busqueda}  | ${movies_list?.movies?.length} results`}
            movies_list={movies_list?.movies}
          />
          <List
            list_name={`Tv:  ${busqueda}  | ${movies_list?.tv?.length} results`}
            movies_list={movies_list?.tv}
          />
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
}

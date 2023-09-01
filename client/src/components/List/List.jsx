import React from "react";
import { results as popular_movies } from "../../../mocks/movies/popular_movies.json";
import ListItem from "./ListItem";
export default function List({
  list_name,
  movies_list,
  onlyFav = false,
  type,
}) {
  return (
    <div className="List_main">
      <h2>{list_name}</h2>
      <div className="list_container">
        {movies_list
          ?.filter((e) => e)
          .map((m, index) => (
            <ListItem movie={m} key={index} onlyFav={onlyFav} type={type} />
          ))}
      </div>
    </div>
  );
}

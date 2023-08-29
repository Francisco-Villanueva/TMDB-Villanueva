import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import useRandom from "../../hooks/useRandom";
import Big_item from "./Big_item";
import { Divider } from "@mui/material";
export default function Home_List() {
  const state = useSelector((s) => s.movies);
  const tv = useSelector((s) => s.tv);

  const { randomIndex } = useRandom(20, 20);
  const randomTv = tv.tv_topRated.results
    ? tv.tv_topRated.results[randomIndex]
    : "";
  return (
    <div>
      <List
        list_name={"Populares"}
        movies_list={state.movies_popular.results}
      />
      <List
        list_name={"Top Rated"}
        movies_list={state.movies_topRated.results}
      />
      <List
        list_name={"Now Playing"}
        movies_list={state.movies_nowPlayings.results}
      />

      <hr style={{ width: "70vw" }} />
      <br />
      <div>{randomTv ? <Big_item tv={randomTv} /> : "loading"}</div>

      <List list_name={"TV On The Air"} movies_list={tv.tv_onTheAir.results} />
    </div>
  );
}

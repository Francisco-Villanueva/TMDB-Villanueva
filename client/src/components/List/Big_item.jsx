import { Grid } from "@mui/material";
import React from "react";
import MoreInfo from "../../commons/MoreInfo";

export default function Big_item({ tv }) {
  // console.log(tv);
  const { backdrop_path, name, overview } = tv;
  return (
    <div className="big_item">
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={name}
      />
      <aside>
        <h2>{name}</h2>
        <span>{overview.slice(0, 350)}</span>
        <MoreInfo />
      </aside>
    </div>
  );
}

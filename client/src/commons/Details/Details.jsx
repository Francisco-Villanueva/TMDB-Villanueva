import React from "react";
import MoreInfo from "../MoreInfo";
import { Divider } from "@mui/material";
export default function Details({
  original_title: title,
  overview,
  genres,
  production_companies: companies,
}) {
  // const{}=props
  return (
    <div className="details_container">
      <div className="details_top">
        <h1>{title}</h1>
        <MoreInfo size={30} onlyFav={true} />
      </div>
      <hr style={{ width: "50%" }} />
      <span>{overview}</span>

      <div>
        <div className="genres_container">
          <h2>Genres</h2>

          {genres.map((genre) => (
            <>
              - <> {genre.name} </>
            </>
          ))}
        </div>
        <div className="genres_container">
          <h2>Companies</h2>

          {companies.map((companie) => (
            <>
              - <> {companie.name} </>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

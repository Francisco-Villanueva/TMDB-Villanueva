import React, { useEffect, useState } from "react";
import MoreInfo from "../../commons/MoreInfo";
import ModalInfo from "../../commons/ModalInfo";
import useModal from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../redux/states/moviesSlice";
import useRandom from "../../hooks/useRandom";
export default function Home() {
  // const [videoToShow, setVideoToShow] = useState([]);
  const dispatch = useDispatch();
  const { movies_topRated, movie_video } = useSelector((s) => s.movies);
  const { randomIndex, handlePause } = useRandom(20, 30);
  const { title, poster_path, backdrop_path, overview, id } =
    movies_topRated.results ? movies_topRated.results[randomIndex] : "";
  const { open, handleClose, handleOpen } = useModal();

  return (
    <section className="home_section">
      <div className="top_movie fade-in-fwd ">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
        />
        <div className="top_movie_info">
          <h1>{title}</h1>
          <div className="top_movie_info_btns">
            <MoreInfo
              size={40}
              showInfo={handleOpen}
              handlePause={handlePause}
            />
            {open ? (
              <ModalInfo
                open={open}
                handleClose={handleClose}
                handlePause={handlePause}
                id={id}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

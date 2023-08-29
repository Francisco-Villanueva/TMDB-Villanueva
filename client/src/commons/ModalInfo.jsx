import React, { useEffect, useState } from "react";
import { Box, backdropClasses } from "@mui/material";
import Modal from "@mui/material/Modal";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../redux/states/moviesSlice";
import axios from "axios";
import Details from "./Details/Details";
import List from "../components/List/List";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "80vh",
  bgcolor: "#cecece",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 1,
};

export default function ModalInfo({ open, handleClose, handlePause, id }) {
  const [selected, setSelected] = useState({
    original_title: "",
    production_companies: [],
    spoken_languages: [],
    vote_average: 0,
    genres: [],
    overview: "",
    popularity: 0,
  });

  const [trailer, setTrailer] = useState({});

  const [similars, setSimilars] = useState([]);
  const closeHandle = () => {
    handleClose();
    if (handlePause) handlePause();
  };

  useEffect(() => {
    if (open) {
      axios
        .get(`http://localhost:4000/movies/deatails/${id}`)
        .then((res) => {
          setSelected(res.data);
          return axios.get(`http://localhost:4000/movies/videos/${id}`);
        })
        .then((video) => {
          const OficialTrailer = video.data.results.filter(
            (e) => e.type === "Trailer"
          )[0];
          return setTrailer(OficialTrailer);
        });
      axios
        .get(`http://localhost:4000/movies/similar/${id}`)
        .then((res) => setSimilars(res.data.results));
    }
  }, [id]);

  console.log({ similars });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          color: "#000",
          backdropFilter: "blur(10px)",
          transition: "all .3s",
        }}
      >
        <div className="modal_main_conainter">
          <button onClick={closeHandle} className="modal_closetBtn">
            x
          </button>
          <VideoPlayer videoId={trailer.key} />
          <div className="modal_infoContainer">
            <Details {...selected} />
            <List
              list_name={"Similars"}
              movies_list={similars}
              onlyFav={true}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

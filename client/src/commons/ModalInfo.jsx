import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../redux/states/moviesSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalInfo({ open, handleClose, handlePause, id }) {
  const closeHandle = () => {
    handleClose();
    if (handlePause) handlePause();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      console.log("entramo");
      dispatch(fetchVideo(id));
    }
  }, [id]);

  const { movie_video } = useSelector((s) => s.movies);

  const videoToShow = movie_video
    ? movie_video.results
      ? movie_video.results.filter((e) => e.type === "Trailer")
      : [{ key: "" }]
    : [{ key: "" }];

  console.log({ open });
  return (
    <div>
      <Modal open={open} onClose={handleClose} style={{ color: "#000" }}>
        <Box sx={style}>
          <button onClick={closeHandle}>x</button>

          <VideoPlayer videoId={videoToShow[0].key} />
        </Box>
      </Modal>
    </div>
  );
}

import React, { useEffect } from "react";
import MoreInfo from "../../commons/MoreInfo";
import useModal from "../../hooks/useModal";
import ModalInfo from "../../commons/ModalInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../redux/states/moviesSlice";

export default function ListItem({ movie }) {
  const { backdrop_path, title, poster_path, id } = movie;
  const { open, handleClose, handleOpen } = useModal();

  return (
    <div className="list_item">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
        className="listItem_img"
      />

      <div className="list_item_info">
        {/* <b>{title}</b> */}
        <MoreInfo size={30} font={20} showInfo={handleOpen} />
        <ModalInfo open={open} handleClose={handleClose} id={id} />
      </div>
    </div>
  );
}

import {
  faAdd,
  faEdit,
  faNewspaper,
  faPlayCircle,
  faReplyAll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="userCard_container">
      <Avatar sx={{ width: 156, height: 156 }}>
        {user.name.slice(0, 1).toUpperCase()}
      </Avatar>
      <div className="user_card_info">
        <div className="user_data">
          <h2>{user.name}</h2>
          <h5>{user.email}</h5>
        </div>
        <div className="editBtn_container">
          <button className="editUser_btn">
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import { Button } from "antd";
import { UserContext } from "../../context/UserContext";

export default function Profile({ user }) {
  const { logOut } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {user.name ? (
        <>
          <Chip
            avatar={
              <Avatar
              // sx={{ bgcolor: user.color }}
              >
                {user.name.slice(0, 1).toUpperCase()}
              </Avatar>
            }
            label={user.name.toUpperCase()}
            style={{ color: "#fff", cursor: "pointer" }}
            clickable
            onClick={handleClick}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button onClick={logOut}>Log out</Button>
            <Link to="/favorites">Favorites</Link>
            <Button>Playlist</Button>
          </Popover>
        </>
      ) : (
        // <UserPopOver />
        <Link
          style={{ background: "unset", border: "unset", cursor: "pointer" }}
          to={"/login"}
        >
          <Chip label={"LOGIN"} style={{ color: "#fff" }} color="primary" />
        </Link>
      )}
    </>
  );
}

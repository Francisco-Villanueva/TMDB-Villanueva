import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function Profile({ user }) {
  return (
    <>
      {user.name ? (
        <Chip
          avatar={
            <Avatar
            // sx={{ bgcolor: user.color }}
            >
              {user.name.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          label={user.name.toUpperCase()}
          style={{ color: "#fff" }}
          // color="primary"
        />
      ) : (
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

import React from "react";
import ReactPlayer from "react-player";
export default function VideoPlayer({ videoId }) {
  return (
    <div
      className="videoPlayer_container"
      style={{ width: "90vw", background: "#000", height: "100%" }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        playing={true}
        controls={true}
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
            },
          },
        }}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}

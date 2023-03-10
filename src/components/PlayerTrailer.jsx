import React from "react";
import ReactPlayer from "react-player";

const PlayerTrailer = ({ videoOne }) => {
  console.log(videoOne.key);
  return (
    <div className="showFilm__video--player">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=" + videoOne.key}
        controls
        width="100%"
      />
    </div>
  );
};

export default PlayerTrailer;

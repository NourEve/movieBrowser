import React from "react";
import ReactPlayer from "react-player";

const PlayerTrailer = ({ videoOne }) => {
  console.log(videoOne.key);
  return (
    <div>
      <ReactPlayer url={"https://www.youtube.com/watch?v=" + videoOne.key} />
    </div>
  );
};

export default PlayerTrailer;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {

    const ref = useRef(null);
    useEffect(() => {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      });
  return (
   
    <div>
      <video src={src} ref={ref}/>
    </div>
  );
};

export default VideoPlayer;

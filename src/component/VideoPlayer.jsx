/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {

    const ref = useRef(null);
    useEffect(() => {
      if (isPlaying) {
        console.log('Calling video.play()');
        ref.current.play();
      } else {
        console.log('Calling video.pause()');
        ref.current.pause();
      }
    }, [isPlaying]);
  return (
   
    <div>
      <video src={src} ref={ref}/>
    </div>
  );
};

export default VideoPlayer;

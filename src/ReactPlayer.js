import React from 'react';
import ReactPlayer from "react-player";
const ReactPlayerr = () => {
	return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution"
        width="100%"
        height="100%"
      />
    </div>
  );
}


export default ReactPlayerr

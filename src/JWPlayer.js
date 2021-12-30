import ReactJWPlayer from "react-jw-player";
import React from 'react'
import Playlist from './JWPlaylist';


const displayName = "ReactJWPlayerContainer";
const url =
  "https://cdn.jwplayer.com/manifests/HslGTuA0.m3u8?exp=1640798324&sig=28b3e0b7622133c4c42c17606b098c1e";

class ReactJWPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoTitle: "",
    };

    this.onAdPlay = this.onAdPlay.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onVideoLoad = this.onVideoLoad.bind(this);

    // each instance of <ReactJWPlayer> needs a unique id.
    // we randomly generate it here and assign to the container instance.this.playerId = someFunctionToRandomlyGenerateId();
  }
  onReady(event) {
    // interact with JW Player API here
    const player = window.jwplayer(this.playerId);
  }
  onAdPlay(event) {
    // track the ad play here
  }
  onVideoLoad(event) {
    this.setState({
      videoTitle: event.item.description, // this only works with json feeds!
    });
  }
  render() {
    return (
      <div className="react-jw-player-container">
        <h1>{this.state.videoTitle}</h1>
        <ReactJWPlayer
         
          playlist={Playlist}
          onAdPlay={this.onAdPlay}
          onReady={this.onReady}
          onVideoLoad={this.onVideoLoad}
          playerId="my-unique-id" // bring in the randomly generated playerId
          playerScript={"https://cdn.jwplayer.com/libraries/NyvPFH2q.js"}
        />
      </div>
    );
  }
}

export default ReactJWPlayerContainer;

import React, { useState } from "react";
import "./SongRow.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track, index }) {

  const [ liked, setLiked ] = useState(false);
  const [{ current_song, my_playlist }, dispatch] = useDataLayerValue();

  const changeSong = () => {
    if (track) {
      dispatch({
        type: "SET_CURRENT_SONG",
        current_song: track,
      });
    }
  };
  
  function millisToMinutes(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const currentSongDuration = millisToMinutes(track?.duration_ms);



  return (
    <div className="songRow">
      <div className="songRow-index">
        <h3 className="indexNumber" >{++index}</h3>
        <button onClick={changeSong} className="playIcon" ><PlayArrowIcon /></button>
      </div>
      <img
        className="songRow-albumImage"
        src={track?.album?.images[0]?.url}
        alt=""
      />
      <div className="songRow-info">
        <div className="songRow-albumInfo" id="albumInfo-name">
          <h4>{track?.name}</h4>
          <p>{track?.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
        <div className="songRow-albumInfo" id="albumInfo-album">
          <p>{track?.album?.name}</p>
        </div>
        <div className="songRow-albumInfo" id="albumInfo-duration">
          <button onClick={() => setLiked(liked ? false : true)}>{liked ? <FavoriteIcon className="like" fontSize="smaller" /> : <FavoriteBorderIcon className="like" fontSize="smaller"/>}</button>
          <p>{currentSongDuration}</p>
        </div>
      </div>
    </div>
  );
}

export default SongRow;

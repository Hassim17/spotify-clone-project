import React, {useState} from "react";
import "./Footer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Grid, Slider } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";

function Footer() {

  const [ shuffle, setShuffle ] = useState(true);
  const [ loop, setLoop ] = useState(true);
  const [{ current_song }, dispatch ] = useDataLayerValue();


  function millisToMinutes(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="footer">
      <div className="footer-left">
        <img
          className="footer-albumImage"
          src={current_song?.album?.images[0]?.url}
          alt=""
        />
        <div className="footer-albumDetails">
          <h3>{current_song?.name}</h3>
          <p>{current_song?.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
      </div>

      <div className="footer-center">
        <div className="footer-center-icons">
          <button onClick={() => setShuffle(shuffle ? false : true)} className={ shuffle ? "footer-green-on" : "footer-green-off" }><ShuffleIcon  /></button>
          <button className="footer-icon"><SkipPreviousIcon fontSize="small"  /></button>
          <button className="footer-icon"><PlayCircleIcon fontSize="large"  /></button>
          <button className="footer-icon"><SkipNextIcon fontSize="small"  /></button>
          <button onClick={() => setLoop(loop ? false : true)} className={ loop ? "footer-green-on" : "footer-green-off" }><RepeatIcon /></button>
        </div>
        <div className="footer-center-slider">
          <p>0:00</p>
          <Slider fontSize="small" />
          <p>{millisToMinutes(current_song?.duration_ms)}</p>
        </div>
      </div>

      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <QueueMusicIcon fontSize="small" />
          </Grid>
          <Grid item>
            <VolumeUpIcon fontSize="small" />
          </Grid>
          <Grid item xs>
            <Slider fontSize="small" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;

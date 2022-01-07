import React, {useState} from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {

  const [ liked, setLiked ] = useState(true);
  const [{ my_playlist }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />

      <div className="body-info">
        <img src={my_playlist?.images[0]?.url} alt="" />

        <div className="body-infoText">
          <h5>PLAYLIST</h5>
          <h2>{my_playlist?.name}</h2>
          <p> {my_playlist?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-songs-icons">
          <PlayCircleFilledIcon className="shuffle-icon" />
          <button className="liked-icon" onClick={() => setLiked(liked ? false : true)}>{liked ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon  fontSize="large"/>}</button>
          <MoreHorizIcon />
        </div>
        <div className="songRow-header">
          <p>#</p>
          <p>Title</p>
          <p>Album</p>
          <p>Duration</p>
        </div>

        {my_playlist?.tracks?.items.map((item) => (
          <SongRow
            track={item.track}
            index={my_playlist?.tracks?.items.indexOf(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;

import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { useDataLayerValue } from "./DataLayer";

function Player({ spotify }) {
  const [{ my_playlist }, dispatch] = useDataLayerValue();

  const random = Math.floor(Math.random() * my_playlist?.tracks?.items.length);

  const track = my_playlist?.tracks?.items[random]?.track;

  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;

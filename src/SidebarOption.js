import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, playlistId }) {
  const [{ current_playlist }, dispatch] = useDataLayerValue();

  const changePlaylist = () => {
    if (playlistId) {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        current_playlist: playlistId,
      });
    }
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <button onClick={changePlaylist}>{title}</button>
      )}
    </div>
  );
}

export default SidebarOption;

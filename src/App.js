import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists, current_playlist, my_playlist }, dispatch] =
    useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    spotify.getPlaylist(current_playlist).then((response) => {
      dispatch({
        type: "SET_MY_PLAYLIST",
        my_playlist: response,
      });
    });

    
  }, [current_playlist]);

  console.log("👨", user);
  console.log("👽", token);
  console.log("🎧", my_playlist);
  console.log("🎶", current_playlist);

  return (
    <div className="App">
      {" "}
      {token ? <Player spotify={spotify} /> : <Login />}{" "}
    </div>
  );
}

export default App;

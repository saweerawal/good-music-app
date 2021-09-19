import React, { useState } from "react";
import "./styles.css";

var party_songs = [
  { song: "STAY (Justin Bieber)", rating: "5/5" },
  { song: "Oh Ho Ho Ho(Remix)", rating: "5/5" },
  { song: "Dheeme Dheeme", rating: "4.5/5" },
  { song: "Brown Munde", rating: "4.5/5" }
];

var romantic_songs = [
  { song: "Raataan Lambiyan", rating: "5/5" },
  { song: "Dil Ko Karaar Aaya", rating: "5/5" },
  { song: "Tu Hi Yaar Mera", rating: "4.5/5" },
  { song: "Sona Lagda", rating: "4.0/5" }
];

var sad_songs = [
  { song: "Mann Bharryaa 2.0", rating: "5/5" },
  { song: "Yeh Dooriyan", rating: "5/5" },
  { song: "Shayad", rating: "4.5/5" },
  { song: "Mehrama", rating: "3.0/5" }
];

export default function App() {
  const [songs, setSongs] = useState([]);
  function setSongsType(type) {
    if (type === "Party") {
      setSongs(party_songs);
    } else if (type === "Romantic") {
      setSongs(romantic_songs);
    } else if (type === "Sad") {
      setSongs(sad_songs);
    }
  }
  return (
    <div className="App">
      <h1>♫ Listen Good Music</h1>
      <p>
        <small>Checkout my favorite songs. Select a genre to get started</small>
      </p>
      <button
        style={{ backgroundColor: "lightyellow", cursor: "pointer" }}
        onClick={() => setSongsType("Party")}
      >
        Party Songs
      </button>
      <button
        style={{ backgroundColor: "lightyellow", cursor: "pointer" }}
        onClick={() => setSongsType("Romantic")}
      >
        Romantic Songs
      </button>
      <button
        style={{ backgroundColor: "lightyellow", cursor: "pointer" }}
        onClick={() => setSongsType("Sad")}
      >
        Sad Songs
      </button>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {songs.map(function (song) {
            return (
              <li
                key={song["song"]}
                style={{
                  backgroundColor: "white",
                  borderStyle: "solid",
                  borderRadius: "0.7rem",
                  margin: "0.5rem 0rem",
                  maxWidth: "100%",
                  padding: "0.5rem",
                  borderWidth: "0.1px",
                  listStyle: "none"
                }}
              >
                {song["song"]}
                <p>
                  <small>rating: {song["rating"]}</small>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

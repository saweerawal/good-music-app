import React, { useState } from "react";
import "./styles.css";

var party_songs = [
  {
    song: "STAY (Justin Bieber)",
    desc:
      "Stay(stylized in all caps) is a song by Australian rapper and singer the Kid Laroi and Canadian singer Justin Bieber. ",
    rating: "5/5"
  },
  {
    song: "Oh Ho Ho Ho(Remix)",
    desc:
      "Oh Ho Ho Ho (Remix) composed by Sukhbir, Abhijit Vaghani and sung by Sukhbir from the Bollywood film Hindi Medium",
    rating: "5/5"
  },
  {
    song: "Dheeme Dheeme",
    desc: "Dheeme Dheeme is a Hindi song by Tony Kakkar",
    rating: "4.5/5"
  },
  {
    song: "Brown Munde",
    desc:
      "Punjabi song 'Brown Munde' sung by AP Dhillon, Gurinder Gill and Shinda Kahlon.",
    rating: "4.5/5"
  }
];

var romantic_songs = [
  {
    song: "Raataan Lambiyan",
    desc: "'Raataan Lambiyan' is sung by Jubin Nautiyal & Asees Kaur",
    rating: "5/5"
  },
  {
    song: "Dil Ko Karaar Aaya",
    desc: "Dil Ko Karaar Aaya (From 'Sukoon') song sung by Neha Kakkar ",
    rating: "5/5"
  },
  {
    song: "Tu Hi Hai Meri Zindagi",
    desc: "'Tu Hi Hai Meri Zindagi' sung by Nikhil D’Souza.",
    rating: "4.5/5"
  },
  {
    song: "Sona Lagda",
    desc:
      "Sona Lagda Sung by Sukh-E, Sukriti Kakar, Prakriti Kakar and composed by Bharatt-Saurabh.",
    rating: "4.0/5"
  }
];

var sad_songs = [
  {
    song: "Mann Bharryaa 2.0",
    desc: "'Mann Bharryaa 2.0' is sung by B Praak.",
    rating: "5/5"
  },
  {
    song: "Yeh Dooriyan",
    desc:
      "Yeh Dooriyan is a Hindi song and is sung by Pritam and Mohit Chauhan.",
    rating: "5/5"
  },
  {
    song: "Shayad",
    desc:
      " 'Shayad' is sung by Arijit Singh and music of the song is given by Pritam.",
    rating: "4.5/5"
  },
  {
    song: "Mehrama",
    desc: "'Mehrama' is sung by Darshan Raval & Antara Mitra.",
    rating: "3.0/5"
  }
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
                  <p>
                    <small>{song["desc"]}</small>
                  </p>
                  <p>
                    <small>rating: {song["rating"]}</small>
                  </p>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

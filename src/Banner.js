import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import Row from "./Row";

function Banner() {
  const [movie, setMovie] = useState([]);

  {
    /* title */
  }
  {
    /* two buttons */
  }
  {
    /* description */
  }

  {
    /* we give a background image to the header */
  }

  useEffect(() => {
    async function getmoviebanner() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    getmoviebanner();
  }, []);

  console.log(movie);

  return (
    <div>
      <header></header>
    </div>
  );
}

export default Banner;

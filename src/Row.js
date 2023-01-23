import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

// state is way to store varibles in react
// its a short term memory
// it disappers when we refresh, but its a good way to store information
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  // here we declared an empty movie array

  // here we need a snippet of code which runs based on specific conditions/variabe
  useEffect(() => {
    // if second parameter of useEffect is [] then we mean just call useEffect(only once) whenever the component is called.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request); // just to see what we are getting back
      // we are interested in request.data.results (an Array)
      setmovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row_posters">
        {/* container -> posters */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;

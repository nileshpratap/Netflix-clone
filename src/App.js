import React from "react";
import "./App.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";

// we use axios to send API requests from our code.

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Banner />
      {/* top poster */}

      {/* building the rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App;

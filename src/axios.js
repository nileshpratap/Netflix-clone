import axios from "axios";

// base url to make requests to the movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// this essentially make custom url.
// if we send a request like
// instance.get('/superman');
// then the url will become
// "https://api.themoviedb.org/3/superman"

export default instance;

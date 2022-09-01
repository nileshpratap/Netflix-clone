import './App.css';
import Row from './Row'
import requests from './requests'

// we use axios to send API requests from our code.

function App() {
  return (
    <div className="App">
        {/* building the rows */}
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;

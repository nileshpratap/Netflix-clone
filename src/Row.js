import React, {useState} from 'react'

// state is way to store varibles in react
// its a short term memory
// it disappers when we refresh, but its a good way to store information
function Row({title, fetchURL}) {
    const [movies, setmovies] = useState([]);
    // here we declared an empty movie array

    // here we need a snippet of code which runs based on specific conditions/variabes


  return (
    <div>
        {/* title */}
        <h2>{title}</h2>



        {/* container -> posters */}
    </div>
  )
}

export default Row
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react';
import MovieList from './components/MovieList';

const titles = ["Breaking Bad", "Game of Thrones", "Brooklyn 99"];


class App extends Component {	
  render() {	  
    return (	   
      <div className="App">	      
              <MovieList titles={titles}/>         
         
      </div>	     
    );	   
  }	 
 }

 export default App;


//  afb96b9738f60f3725583b1784cfaa0e
// https://api.themoviedb.org/3/movie/550?api_key=afb96b9738f60f3725583b1784cfaa0e
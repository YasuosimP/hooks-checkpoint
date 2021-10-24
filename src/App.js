
import './App.css';
import MoviesList from './MoviesListe'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import Search from './Search';
import {BrowserRouter as Router ,Route   } from 'react-router-dom';
import Desc from './desc';


function App() {
  const [keyword, setKeyword] = useState("")
  const [newRate, setNewRate] = useState(1)
  const [movies,setMovies] =useState([
    {
      id:uuidv4(),
      img:"https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg",
      alt :"https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg",
      title : "Demon slayer: Mugen Train",
      duration: "1h 57m",
      date:"2020 ",
      rate:4,
      genre:"Fantasy/Action",
      description : "A boy raised by boars, who wears a boar's head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it."
    },
    {
      id:uuidv4(),
      img:"https://yts.torrentbay.to/s__img/assets/images/movies/i_want_to_eat_your_pancreas_2018/medium-cover.jpg",
      alt :"https://m.media-amazon.com/images/M/MV5BNDM4MWE3NGQtODlkYS00NWU5LTg3ZjMtMTEyNjljOWI4NWIxXkEyXkFqcGdeQXVyNzkzODk2Mzc@._V1_.jpg",
      title : "I Want to Eat Your Pancreas",
      duration: "1h 48m",
      date:"2018  ",
      rate:3,
      genre:"Romance/Drama",
      description : "An aloof boy comes across a book in a hospital waiting room. He soon discovers that it is a diary kept by his very popular classmate who reveals to him that she is secretly suffering from a fatal pancreatic illness."
    },
  ])
  const search =(text)=>{
    setKeyword(text)
  }
  const setRate=(rate)=>{
     setNewRate(rate)
  }
  const addMovie=(movie)=>{
    setMovies(movies.concat(movie))
  }
  return (
    
    <div className="App">
    <Router>
      <Search search={search} setRate={setRate} newRate={newRate}/>
      <MoviesList addMovie={addMovie} movies={movies.filter(el=> el.rate >= newRate&& el.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
      <Route path="/description/id" render={(props)=><Desc {...props}movies={movies}/>}/>
      </Router>
    </div>
    
  );
}

export default App;

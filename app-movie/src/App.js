import { DISCOVER_API } from './API';
import { SEARCH_API } from './API';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import MovieCard from './components/MovieCard' ;
import MovieAdd from './components/MovieAdd' ;
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

const App = () => {

  const [movies, setMovies] = useState([])
  
  const searchEL = useRef(null)

  useEffect(() => {
    fetchData(DISCOVER_API)
  }, [])
  
  const add=(newFilm)=>{
    setMovies(movies=>[...movies,newFilm])
  }
  
  const fetchData = (API) => {
    fetch(API).then((respnse) => {
      return respnse.json()
  }).then((data) => {
    //console.log(data)
    setMovies(data.results)
  })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    const search = searchEL.current.value  
    if(search){
      fetchData(SEARCH_API + search)
    }
  }

  return (
    <>
    <div className="header">
      <form class="input-group rounded"  onSubmit={onSubmitHandler}>
          <input className="header-search" ref={searchEL} type="search" 
          class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
      </form>
      <MovieAdd add={add}/>

    </div>

    <div className="page-title"> <h1> Welcome to my Movie App </h1></div>
    <div className="movie-container">

      { movies.map((movie) => (<MovieCard key={movie.id} {...movie} />)) }

    </div>

    </>
  )
}

export default App;

import { use, useEffect, useState } from "react";
import StarRating from "./StarRating";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },

  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
function Navbar({query,setQuery}){

  return (
<nav className="nav-bar">
        <Logo />
       <Search query={query} setQuery={setQuery} />
        <p className="num-results">
          Found <strong>X</strong> results
        </p>
      </nav>
  )
}
function Logo(){
  return (
<div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
  )
}

function Search({query, setQuery}) {
          return (
            <input
              className="search"
              type="text"
              placeholder="Search movies..."
              onChange={(e) => setQuery(e.target.value)}
            />
  )
}

function Main({children}){
 
  return (
<main className="main">
        {children}
      </main>
  )
}
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


function ListMovies({movies, onSelectedMovie,handleCloseMovieDetails,handleTitle}) {
    return (
      <Box>
        <MovieList movies={movies} handleTitle={handleTitle} onSelectedMovie={onSelectedMovie} handleCloseMovieDetails={handleCloseMovieDetails}/>
      </Box>
    )
}

function WatchedMovies({watched}) {

  return (
    <Box>
      <MovieListWatched watched={watched} />
    </Box>
  )
}

function Box({children}){
     const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          {isOpen && (
            children
          )}
        </div>
  )

}
function MovieList({movies, onSelectedMovie,handleCloseMovieDetails,handleTitle}){
  return (
 <ul className="list list-movies">
              {movies?.map((movie) => (
                <li key={movie.imdbID} onClick={() => {onSelectedMovie(movie.imdbID) ; handleTitle(movie.Title)}}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
  )
}

function MovieListWatched({watched}) {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
<>
              <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
  )
}

const value="8d474799"
export default function App() {
    const [query, setQuery] = useState("");
    const [Title,setTitle] = useState("usePopcorn");
    const [movies, setMovies] = useState([]);
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [watched, setWatched] = useState([]);
 
    function handleAddToWatched(movie) {
      setWatched((watched) => [...watched, movie]);
    }

    function handleSelectMovie(id) {
      setSelectedId(selectedId=> selectedId === id ? null : id);
    }
    function handleCloseMovieDetails() {
      setSelectedId(null);
    }
 
    function handleTitle(title){
      setTitle(title)
    }

    useEffect(()=>{
       document.addEventListener("keydown", function (e) {
        if(e.code=="Escape")
        handleCloseMovieDetails();
        console.log("escape key pressed");
      });
      return () =>{
        document.removeEventListener("keydown", function (e) {
          if(e.code=="Escape")
          handleCloseMovieDetails();
          console.log("escape key pressed");
        });
      }
    },[])
    useEffect(function () {
      document.title=Title
    }, [Title]);

    useEffect(function (){
      async function fetchMovies(){
        try{
        setIsLoading(true);
     const res= await fetch(`http://www.omdbapi.com/?apikey=${value}&s=${query}`);
     if(!res.ok) {
            throw new Error("Something went wrong with fetching movies");
        }
      const data= await res.json()
        console.log(data);
        setMovies(data.Search);
    }
        catch(err){
          console.error(err);
          setError(err.message);
        }
        finally{
          setIsLoading(false);
        }
      }
      if (query.length > 3) {
        setError("");
        fetchMovies();
      } else {
        setMovies([]);
      }


    },[query]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <Main>
        {!error && !isLoading && <ListMovies movies={movies} handleTitle={handleTitle} onSelectedMovie={handleSelectMovie} />}
        {isLoading && <Loader />}
        {error && <Error message={error} />}
        {selectedId ? <MovieDetails selectedId={selectedId} setWatched={setWatched} handleCloseMovieDetails={handleCloseMovieDetails}/> : <WatchedMovies watched={watched}/> }

      </Main>

    </>
  );
}

function MovieDetails({selectedId,handleCloseMovieDetails,handleAddToWatched,setWatched}){

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(function () {
    async function fetchMovieDetails() {
      try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${value}&i=${selectedId}`);
        if (!res.ok) {
          throw new Error("Something went wrong with fetching movie details");
        }
        const data = await res.json();
        setMovieDetails(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovieDetails();
  },[]);

  return (
    <div className="details">
      <button className="btn-back" onClick={handleCloseMovieDetails}>&larr;</button>
      {movieDetails ? (
        <>
          <img src={movieDetails.Poster} alt={`${movieDetails.Title} poster`} />
          <div className="details__info">
            <h2>{movieDetails.Title}</h2>
            <p>
              <span>🗓</span>
              <span>{movieDetails.Year}</span>
            </p>
            <p>
              <span>⭐️</span>
              <span>{movieDetails.imdbRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movieDetails.Runtime}</span>
            </p>
            <p>{movieDetails.Plot}</p>
            <StarRating maxRating={10}/>
            <button onClick={()=>setWatched(movieDetails)}>+ add watch-list</button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}
function Loader() {
  return (
    <div className="loader">
      <span className="loader__text">Loading...</span>
    </div>
  );
}
function Error({message}) {
  return (
    <div className="error">
      <span className="error__text">{message}</span>
    </div>
  );
}
import MovieCard from "./MovieCard"

export default function SearchResults({results}) {
  if (results === undefined) {
    return (
      <div></div>
    )
  } else {
    return(
      results.map((result) => {
        return <MovieCard key={result.imdbID} movie={result}/>
      })
    )
  }
}
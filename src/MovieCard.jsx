export default function MovieCard({movie}) {
  return(
    <div className="cards">
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title}/>
    </div>
  )
}
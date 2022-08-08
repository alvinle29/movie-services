import MovieItem from './movieItem';

const MoviesList = ({ movies }) => {
  return (
    <main className='movies-list'>
      {movies.length > 0 &&
        movies.map((movie, index) => (
          <MovieItem
            key={index}
            title={movie.title}
            overview={movie.overview}
            img={movie.poster_path}
            score={movie.vote_average}
          />
        ))}
    </main>
  );
};

export default MoviesList;
import MovieItem from './movieItem';
import styles from './movieList.module.css'

const MoviesList = ({ movies }) => {

  console.log(movies)
  return (
    <main className={styles.movies_list}>
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
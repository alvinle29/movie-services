const MovieItem = ({ title, overview, img, score }) => {
  const changeScoreColor = (score) => {
    if (score >= 8) {
      return 'green';
    } else if (score >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className='movie-item'>
      <img src={process.env.REACT_APP_IMG_API + img} alt={title}></img>
      <div className='info'>
        <p className='title'>{title}</p>
        <span
          className={`${'score'} ${classes[changeScoreColor(score)]}`}
        >
          {score.toFixed(1)}
        </span>
      </div>

      <div className='overview'>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieItem;
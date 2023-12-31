import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../feature/Movies/MovieSlice';
import MovieCard from '../MoveCard/MoveCard';
import './MoveListing.css';

const MoveListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ?
      (movies.Search.map((movie, index) => {
        <MovieCard key={index} data={movie} />;
      })
      ) : (
      <div className="Movies-error">
        <h3>{movies.Error}</h3>
      </div>
      );
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {renderMovies}
        </div>
      </div>
    </div>
  );
}

export default MoveListing;

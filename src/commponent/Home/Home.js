import React, { useEffect } from 'react';
import MovieListing from '../MoveListing/MoveListing';

import { useDispatch } from 'react-redux';

import {fetchAsyncMovies} from '../../feature/Movies/MovieSlice';

const Home = () => {

  
  const dispatch = useDispatch();


  
  useEffect(() => {
   

   dispatch(fetchAsyncMovies() );

  }, [dispatch]);


  return (
    <div>
      <div className='banner-img'>

      </div>
      <MovieListing />
    </div>

  );
}

export default Home;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Footer from './commponent/footer/Footer';
import Home from "./commponent/Home/Home";
import MovieDetail from './commponent/MoveDetails/MoveDetail';
import PageNotFound from './commponent/PageNotFound/PageNotFound';
import Header from './commponent/Header/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header> </Header>
        <div className='container'>

          <Routes >
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetail} />
            <Route Component={PageNotFound} />
          </Routes >
        </div>
        <Footer />


      </Router>


    </div>
  );
}

export default App;

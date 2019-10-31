import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const addToSavedList = movie => {
    !savedList.find(savedMovie => savedMovie.title === movie.title) &&
      setSavedList([...savedList, movie]);
    console.log(savedList);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path='/' exact component={MovieList} />
      <Route
        path='/movie/:id'
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
      <Redirect to='/' />
    </div>
  );
};

export default App;

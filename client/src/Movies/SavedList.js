import React from 'react';
import { useHistory } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <span key={index} className="saved-movie">{movie.title}</span>
      ))}
      <div 
        onClick={() => history.push("/")} // Routes to the home url
        className="home-button">
          Home
      </div>
    </div>
  );
};

export default SavedList;

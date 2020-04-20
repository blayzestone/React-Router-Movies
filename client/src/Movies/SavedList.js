import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <Link to={`/movies/${movie.id}`} style={{ color: "inherit" }}>
          <span key={index} className="saved-movie">{movie.title}</span>
        </Link>
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

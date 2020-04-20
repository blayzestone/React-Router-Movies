import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <NavLink to={`/movies/${movie.id}`} 
          style={{ color: "inherit" }}
          activeStyle={{ color: "#ccc" }}
        >
          <span key={index} className="saved-movie">{movie.title}</span>
        </NavLink>
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

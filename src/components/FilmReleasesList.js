import React, { Component } from 'react';
import Film from './Film';

class FilmReleasesList extends Component{

  render(){

    const allFilms = this.props.data.map(film => {
      return (
        <Film
          id={film.id}
          name={film.name}
          url={film.url} />
      )
    })

    return(
      <div className="film-releases-list">
        {allFilms}
      </div>
    )
  }

}

export default FilmReleasesList;

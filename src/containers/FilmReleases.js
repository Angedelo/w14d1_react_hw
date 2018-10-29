import React, { Component } from 'react';
import FilmReleasesList from '../components/FilmReleasesList';

class FilmReleases extends Component{
  render(){
    return(
      <div className="film-releases">
        <h2>Upcoming Film Releases</h2>
        <FilmReleasesList />
      </div>
    )
  }
}

export default FilmReleases;

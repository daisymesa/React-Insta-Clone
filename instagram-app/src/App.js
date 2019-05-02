import React, { Component } from 'react';
import './App.css';


import SearchBar from './components/SearchBar/SearchBar';

import PostContainer from './components/PostContainer/PostContainer';

import DummyData from './components/DummyData/DummyData';
// import dummyData from '.dummy-data';


class App extends Component {
  constructor() {
    super();

    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">

        <div className="search-bar">
          <SearchBar />
        </div>


        <div className="post-container">
          <PostContainer dummyData={this.state.dummyData} />
        </div>

      </div>

    )
  }

}



export default App;

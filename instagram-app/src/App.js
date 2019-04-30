import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import SearchBar from './components/SearchBar/SearchBar.js';

import PostContainer from './components/PostContainer/PostContainer.js';

import dummyData from './dummy-data.js';


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

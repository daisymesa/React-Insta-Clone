import React, { Component } from 'react';
import './App.css';


import SearchBar from './components/SearchBar/SearchBar';

import PostContainer from './components/PostContainer/PostContainer';

import DummyData from './components/DummyData/DummyData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: DummyData
    };
  }

  componentDidMount() {
    this.setState({
      newComment: ""
    })
  }


  render() {
    return (
      <div className="App">

        <div className="search-bar">
          <SearchBar />
        </div>

        <div className="post-container">
          <PostContainer instaData={this.state.instaData} />
        </div>

      </div>
    )
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';


import SearchBar from './components/SearchBar/SearchBar';

import PostContainer from './components/PostContainer/PostContainer';

import DummyData from './components/DummyData/DummyData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: DummyData,
      newComments: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount is Updating!")
    this.setState({
      newComment: ""
    })
  }

  // changeHandler = event => {
  //   this.setState ({ newComments: event.target.value});
  // };


  render() {
    return (
      <div className="App">

        <div className="search-bar">
          <SearchBar />
        </div>

        <div className="post-container">
          <PostContainer instaData={this.state.instaData} key={this.state.id} />
        </div>

      </div>
    )
  }
}


export default App;

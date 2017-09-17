import React, { Component } from 'react';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import axios from 'axios';


class App extends Component {
  state = { songs: ['song1', 'song2'] }
    
  componentDidMount() {
    axios.get('/api/songs')
      .then( res => this.setState ({ songs: res.data}))
  }

  addItem = (name) => {
    const {songs} = this.state;
    axios.post('/api/songs', {song: {songs}})
      .then(res => {
        this.setState({songs: [res.data, ...songs]})
      })
  }

  render() {
    return (
      <div className = "container">
        <h2>Top 100 Song List</h2>
          <SongForm 
            addItem={this.addItem}
          />
          <SongList 
            songs={this.state.songs}  
          />
      </div>
    );
  }
}

export default App;

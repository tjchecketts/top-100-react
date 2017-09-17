import React from 'react';

// class SongList extends React.Component {
//   render() {
    // return (
const SongList = ({ songs, artist, rank }) => {
    return (<div className="row">
      { songs.map( song => 
        <p>
          {song}
          {song.artist}
          {song.rank}
        </p>
      )}
    </div>
  )
}

export default SongList;
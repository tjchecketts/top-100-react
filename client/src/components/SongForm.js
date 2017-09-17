import React from 'react';

class SongForm extends React.Component {
  state = {name: "" }

  addSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "" })
  }
  addChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.addSubmit}>
        <input
          placeholder="Add a Song"
          required
          value={this.state.name}
          onChange={ this.addChange }
        />
      </form>
    )
  }
}

export default SongForm;
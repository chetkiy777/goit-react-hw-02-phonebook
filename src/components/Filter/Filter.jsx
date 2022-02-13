import React from 'react';

export class Filter extends React.Component {
  state = {
    finder: '',
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input name="filter" value={this.state.finder} />
      </div>
    );
  }
}

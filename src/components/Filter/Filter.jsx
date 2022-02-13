import React from 'react';

export class Filter extends React.Component {
  state = {
    finder: '',
  };

  onChange = e => {
    this.setState({ finder: e.currentTarget.value });
    this.props.filterContacts(this.state.finder);
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          name="filter"
          value={this.state.finder}
          onChange={e => this.onChange(e)}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.onChange(value);
  };
  callbackFunc = () => console.log('LOG FROM FILTER:',this.state);
  render() {
    const { filter } = this.state;
    return (
      <div>
        <form>
          <label>
            <h2>Find contacts by name</h2>
            <input
              type="text"
              placeholder="Enter friend"
              value={filter}
              onChange={this.handleChange}
              id={this.formId}
              name="filter"
            ></input>
          </label>
        </form>
        <button onClick={() => this.callbackFunc()} type="button">
          LOG
        </button>
      </div>
    );
  }
}

export default Filter;

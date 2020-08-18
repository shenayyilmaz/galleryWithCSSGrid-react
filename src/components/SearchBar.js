import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            type="text"
            name="term"
            value={this.state.terms}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;

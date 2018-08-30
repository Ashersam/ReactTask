import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
  

  this.props.onFilter({
    [name]: value
  });
}

  render() {
    return (
      <fav>
      <form>
      <label>
            Search ID :
        <input 
        type="text" 
        placeholder="emp1, emp2.." 
        value= {this.props.filterText}
        onChange = {this.handleChange}
        name="filterText"
        required
        />
        </label>
      </form>
      </fav>
    );
  }
}

export default Filters;
import React from 'react';
import "./App.css";


const RESET_VALUES = {name:'', Designation:'', Address:''};

class EmpForm extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      Emp: Object.assign({}, RESET_VALUES),
      errors:{}
        };
      }

handleChange(e) {
  const target = e.target;
  const value = e.target.value;
  const name = target.name;

  this.setState((preState) => {
    preState.Emp[name] = value;
    return { Emp: preState.Emp };
  });
}
handleSave(e) {
  this.props.onSave(this.state.Emp);
  this.setState({
    Emp: Object.assign({}, RESET_VALUES),
    errors: {}
  });
  e.preventDefault();
}

  render() {
    return (
      <fav>
      <form>
        <h3>Enter A New Emp Details</h3>
        <p>
          <label>
            Name
            <br />
            <input 
            type="text" 
            name="name" 
            required
            onChange={this.handleChange}
            value={this.state.Emp.name}
            />
          </label>
        </p>
        <p>
          <label>
            Designation
            <br />
            <input 
            type="text" 
            name="Designation" 
            maxLength="18" required
            onChange={this.handleChange}
            value={this.state.Emp.Designation}
             />
          </label>
        </p>
        <p>
          <label>
            Address
            <br />
            <input 
            type="text" 
            name="Address" 
            required
            onChange={this.handleChange}
            value={this.state.Emp.Address}
             />
          </label>
        </p>
        <input type="submit" 
        value="Save" 
        onClick={this.handleSave}/>
      </form>
      </fav>
    );
  }
}

export default EmpForm;
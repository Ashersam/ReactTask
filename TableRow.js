import React from 'react';
import "./App.css";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }
  destroy() {
    this.props.onDestroy(this.props.product.id);
  }

  render() {
    var name = this.props.product.name
    var Designation = this.props.product.Designation
    var Address = this.props.product.Address
    var Empid = this.props.product.uni
    return (
      <table className= "table1">
      <tbody>
      <tr>   
        <th>{Empid}</th>
        <th>{name}</th>
        <th>{Designation}</th>
        <th>{Address}</th>
        <th>
           <button onClick={this.destroy}>x</button>
        </th>
      </tr>
      </tbody>
      </table>
    );
  }
}

export default TableRow;
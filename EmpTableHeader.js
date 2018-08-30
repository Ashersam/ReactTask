import React from 'react';
import "./App.css";


class EmpTableHeader extends React.Component {
  render() {
    return( 
    <table className= "table1">
      <tr>
      <th> EMPID </th>
       <th> NAME </th>
       <th> DESIGN </th>
       <th> ADDR </th>
      </tr>
      </table>
    );
  }
}

export default EmpTableHeader;
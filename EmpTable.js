import React from 'react';
import TableRow from './TableRow.js';
import EmpTableHeader from './EmpTableHeader.js';
import "./App.css";

class EmpTable extends React.Component {
  constructor(props){
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }



  handleDestroy(id) {
    this.props.onDestroy(id);
  }
  render() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    let rows = [];
    productsAsArray.forEach((product) => {
     if (product.uni.indexOf(this.props.filterText) === -1)
     {
     return;
    } 
    rows.push(
        <TableRow product={product} key={product.id} onDestroy={this.handleDestroy} />
      );
    });

    return (
      <div>
        <table className="table1" >
          <thead>
            <tr>
              <EmpTableHeader/>
            </tr>
          </thead>
          <td>{rows}</td>
        </table>
      </div>
    );
  }
}

export default EmpTable;
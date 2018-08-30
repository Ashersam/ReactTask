import React from 'react';
import Filters from './Filters.js';
import EmpTable from './EmpTable.js';
import EmpForm from './EmpForm.js';

var EMPDATA = {};

class DataBase extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      filterText:'',
      products: EMPDATA,
      counter:0
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.saveData = this.saveData.bind(this);
  }
  handleFilter(filterInput){
    this.setState(filterInput);
  }

  saveData(product) {

    this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));

    if (!product.id) {
      product.id = new Date().getTime();
      product.uni = "emp"+ this.state.counter
    }
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      return { products };
      
    });
 
  }


  handleDestroy(productId) {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return { products };
    });
  }

  render() {
    return (
      <div>
        <Filters 
          filterText = {this.state.filterText}
          onFilter={this.handleFilter}  
          />
      
        <EmpTable
         products= {EMPDATA}
         filterText= {this.state.filterText}
         onDestroy={this.handleDestroy}
          />
        <EmpForm onSave={this.saveData} 
        />
      </div>
    );
  }
}

export default DataBase;
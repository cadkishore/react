import React from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';

function App() {
  constructor(props){
    super(props);

    this.state ={
      dishes: DISHES
    };
  }

  return (
    <div>
      <Navbar dark color="primary">
        <div clasName="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;

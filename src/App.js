import React, { Component } from 'react';
import Shoppinglist from './components/Shoppinglist';
import './App.css';
import AddItem from './components/AddItem';


class App extends Component {
  constructor(){
    super()
    this.state={
      shoppinglist:[]
    }
  }

  handlerAddItem(shoppingListNewItem){
    let shoppinglistOldObj=this.state.shoppinglist;
    shoppinglistOldObj.push(shoppingListNewItem);
    this.setState({shoppinglistOldObj:shoppinglistOldObj});
    for (let index = 0; index < shoppinglistOldObj.length; index++ ) {
      console.log(shoppinglistOldObj[index].cena)
    }
      
    }
    

  handlerDelItem(id){
    let shoppinglistOldObj=this.state.shoppinglist;
    let index= shoppinglistOldObj.findIndex(x=> x.id === id);
    shoppinglistOldObj.splice(index,1);
    this.setState({shoppinglistOldObj:shoppinglistOldObj});
  }
  render() {

    return (
      <div className="App">
        <header className="App-header"> <h1>Shopping List</h1>
        <AddItem addItem={this.handlerAddItem.bind(this)}/>
        </header>
        <main className="App-main">
        <Shoppinglist shoppinglist={this.state.shoppinglist} onDelete={this.handlerDelItem.bind(this)}/>
        </main>
      </div>
    );
  }
}

export default App;

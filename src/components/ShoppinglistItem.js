import React, { Component } from 'react';

class Shoppinglistitem extends Component{
    delItem(id){
    this.props.onDelete(id);
    }
    render(){
        
        return(
            <li className="Shoppinglist">
           <strong>{this.props.shoppinglist.naziv}</strong>   {this.props.shoppinglist.cena} RSD / {this.props.shoppinglist.kolicina} <em onClick={this.delItem.bind(this, this.props.shoppinglist.id)}>izbrisi</em>
            </li>
        )
    }
}
export default Shoppinglistitem;
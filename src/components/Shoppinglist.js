import React, { Component } from 'react';
import Shoppinglistitem from './ShoppinglistItem';

class Shoppinglist extends Component{
    delItem(id){
        this.props.onDelete(id);
        }
    render(){
    let shopingListItem;
    if (this.props.shoppinglist) {
        shopingListItem=this.props.shoppinglist.map(shoppinglist =>{
            //console.log(shoppinglist)
            return(
                <Shoppinglistitem key={shoppinglist.naziv}  shoppinglist={shoppinglist} onDelete={this.delItem.bind(this)}/>
            )
        });
     
    }
        return(
            <div className="Shoppinglist">
            {shopingListItem}
            </div>
        )
    }
}
export default Shoppinglist;
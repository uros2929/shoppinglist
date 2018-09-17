import React, { Component } from 'react';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            newShoppingItem: {}
        }
    }


    submit(event) {
        event.preventDefault();
        if (this.refs.naziv.value === "") {
            alert("Naziv je obavezan! ")
        } else {
            this.setState({
                newShoppingItem: {
                    id:this.refs.naziv.value,
                    naziv: this.refs.naziv.value,
                    cena: this.refs.cena.value,
                    kolicina: this.refs.kolicina.value
                }
            },function () {
                //console.log(this.state);
                this.props.addItem(this.state.newShoppingItem)
            }
            )

        }
    }
    render() {
        return (
            <div className="App-forma">
                <form onSubmit={this.submit.bind(this)}>
                    <label>Naziv proizvoda:</label> <br/>
                    <input type="text" ref="naziv" /><br/><br/>
                    <label>Cena proizvoda:</label><br/>
                    <input type="number" ref="cena" /><br/><br/>
                    <label>Kolicina proizvoda:</label><br/>
                    <input type="number" ref="kolicina" /><br/><br/>
                    <input type="submit" value="Postavi proizvod" /><br/>
                </form>
            </div>
        )
    }
}

export default AddItem;
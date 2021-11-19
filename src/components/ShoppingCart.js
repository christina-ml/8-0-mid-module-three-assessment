import { Component } from "react";

class ShoppingCart extends Component{
    constructor(){
    super();

    this.state = {
        subtotal: 0,
        tax: 0,
        total: 0,
    }}
    
    render(){
        return(
            <div className="cart-container">
            <h3>Cart</h3>
            <ul>
                {this.props.productsLists}
            </ul>
            <div><h3>Subtotal: ${this.state.productPrice}</h3></div>
            <div><h3>Tax: ${this.state.productPrice}</h3></div>
            <div><h3>Total: ${this.state.productPrice}</h3></div>
            </div>
        )
    }
}

export default ShoppingCart;
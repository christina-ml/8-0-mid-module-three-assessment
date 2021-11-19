import { Component } from "react";

class ShoppingCart extends Component{
    constructor(){
    super();

    this.state = {
        name: '',
        price: '',

        subtotal: 0,
        tax: 0,
        total: 0,
    }}
    
    addListItem = () => {
        return (
            <li>{this.props.productsLists}</li>
        )
    }

    render(){
        let listItems = this.props.allProductsList.map((product, i) => {
            return (
              <li
                key={product + i}
                onClick={() => this.handleIsComplete(i)}
              >
                {product.name}: ${product.price}
              </li>
            )
          })

        return(
            <div className="cart-container">
            <h3>Cart</h3>
            <ul>
                {listItems}
            </ul>
            <div><h3>Subtotal: ${this.state.productPrice}</h3></div>
            <div><h3>Tax: ${this.state.productPrice}</h3></div>
            <div><h3>Total: ${this.state.productPrice}</h3></div>
            </div>
        )
    }
}

export default ShoppingCart;
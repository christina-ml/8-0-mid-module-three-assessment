import { Component } from "react";
import "./App.css";
import productData from "./data/productData";

class App extends Component{
  constructor(){
    super();

    this.state = {
      productId: '',
      productName: '',
      productPrice: 0,
      productDescription: '',
      productImg: "",
    }
  }

  render(){
    return(
      <div>
        <h2>My Garage Sale</h2>
        {/* START - products section */}

        <div className="products-container">
          <h3>Products</h3>
          <div className="products">
            <div>Price: $19.99</div>
            <button type="submit">Add To Cart</button>
            <img src="product-img" alt="product image" />
            <div>Baseball Glove</div>
            <div>Product Description</div>
          </div>
        </div>

        {/* END - products section */}
        {/* START - cart section */}

        <div className="cart-container">
          <h3>Cart</h3>
          <ul>
            <li>Item Name: $Price.00</li>
            <li>Item Name: $Price.00</li>
          </ul>
          <div><h3>Subtotal: $Price.00</h3></div>
          <div><h3>Tax: $Price.00</h3></div>
          <div><h3>Total: $Price.00</h3></div>
        </div>

        {/* END - cart section */}
        {/* START - checkout section */}
        <div className="form-container">
          <h3>Checkout</h3>
          <form id="checkout">
            <div>
              <label htmlFor="first-name">First Name</label><br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label><br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label><br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="credit-card">Credit Card</label><br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label><br />
              <input type="text" />
            </div>
            <div>
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
        {/* END - checkout section */}
      </div>
    )
  }
}

export default App;

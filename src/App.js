import { Component } from "react";
import "./App.css";

class App extends Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h2>My Garage Sale</h2>
        {/* START - products section */}

        <div className="products">
          <h3>Products</h3>
          <div className="product-card">
            <div>Price: $Price.00</div>
            <br />
            <button type="submit">Add To Cart</button>
            <br />
            <img src="product-img" alt="product image" />
            <br />
            <div>Product Description</div>
          </div>
        </div>

        {/* END - products section */}
        {/* START - cart section */}

        <div className="cart">
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
        <div className="form" id="checkout">
          <h3>Checkout</h3>
          <form>
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

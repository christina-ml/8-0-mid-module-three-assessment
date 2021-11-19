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
        <h1>My Garage Sale</h1>
        <div className="products">Products</div>
        <div className="cart">Cart</div>
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
      </div>
    )
  }
}

export default App;

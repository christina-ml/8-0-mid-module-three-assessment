import { Component } from "react";
import "./App.css";
import productData from "./data/productData";

class App extends Component{
  constructor(){
    super();

    this.state = {
      allProductsList: productData,

      
      productsList: [],

      newProduct: {
        productId: '',
        productName: '',
        productPrice: 0,
        productDescription: '',
        productImg: "",
      },

    }
  }

  handleProductDisplay = ()=>{

  }

  render(){
    console.log(this.state.allProductsList);

    let productsListArr = this.state.allProductsList.map((product)=>{
      return (
        <div>
          <div>Price: ${product.price.toFixed(2)}</div>
          <button type="submit">Add To Cart</button>
          <img src={product.img} alt={product.name} />
          <div>{product.name}</div>
          <div>{product.description}</div>
        </div>
      )
    })

    return(
      <div className="garage-container">
        <h2 className="header">My Garage Sale</h2>
        {/* START - products section */}

        <div className="products-container">
          <h3>Products</h3>
          <div className="products">
            {productsListArr}

            
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

import { Component } from "react";
import "./App.css";
// import ShoppingCart from "./components/ShoppingCart";
import productData from "./data/productData";

class App extends Component{
  constructor(){
    super();

    this.state = {
      allProductsList: productData,
      productsLists: [],
    }
  }

  // Cart:
  addProduct= (product) => {
    // console.log("clicked product's name:", product.name)
    // console.log("clicked product's price:", product.price.toFixed(2))
    const { productsLists } = this.state;
    this.setState({
      productsLists: [...productsLists, product],
    })
  }

  handleSubtotal=(event)=>{
    console.log(event.target.price)
    console.log(this.state.productsLists);
  }

  // Checkout
  handleBuyNowClick=(event)=>{
    event.preventDefault();
    console.log("Clicked Buy Now button");
  }

  render(){
    let shoppingCartArr = this.state.productsLists.map((product)=>{
      let { name, price } = product; 
      return (
        <div
          className="cart-container"
          onClick={()=>this.addProduct(product)}
        >
          <li>{name}: ${price.toFixed(2)}</li>
        </div>
      )
    })

    // Products:
    let productsListArr = this.state.allProductsList.map((product)=>{
      return (
        <div className="product-card">
          <h4>{product.name}</h4>
          <div>Price: ${product.price.toFixed(2)}</div>
          <br />
          <button onClick={()=>this.addProduct(product)} 
            type="submit">Add To Cart</button>
          <br />
          <img src={product.img} alt={product.name} />
          <br /><br />
          <div>{product.description}</div>
          <br /><br />
        </div>
      )
    })

    return(
      <div className="garage-container">
        <h2 className="header">My Garage Sale</h2>
        <div className="products-container">
          <h3>Products</h3>
          <div className="products">
            {productsListArr}
          </div>
        </div>

        <div>
          <h3>Cart</h3>
          { shoppingCartArr }
          <div><h3>Subtotal: {this.handleSubtotal} ${this.state.productsLists.price}</h3></div>
          <div><h3>Tax: ${this.state.productPrice}</h3></div>
          <div><h3>Total: ${this.state.productPrice}</h3></div>
        </div>

        {/* <ShoppingCart 
          allProductsList={this.allProductsList}
          productsLists={this.productsLists} 
          addProduct={this.addProduct}
        /> */}

        <div className="form-container">
          <h3>Checkout</h3>
          <form onClick={this.handleBuyNowClick} id="checkout">
            <div>
              <label htmlFor="first-name">First Name</label><br />
              <input type="text" required />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label><br />
              <input type="text" required />
            </div>
            <div>
              <label htmlFor="email">Email</label><br />
              <input type="text" required />
            </div>
            <div>
              <label htmlFor="credit-card">Credit Card</label><br />
              <input type="text" required />
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label><br />
              <input type="text" required />
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

import { Component } from "react";
import "./App.css";
import productData from "./data/productData";

class App extends Component{
  constructor(){
    super();

    this.state = {
      // Products
      allProductsList: productData,

      // Cart
      productsLists: [],

      productListItem: [],

      newProduct: {
        productName: '',
        productPrice: 0,
        productDescription: '',
        productImg: "",
        productId: '',
      },

      subtotal: 0,
      tax: 0,
      total: 0,
    }
  }

  // Cart:
  handleCartClick=(product)=>{
    console.log("clicked product's name:", product.name)
    console.log("clicked product's price:", product.price.toFixed(2))


    this.setState({
      newProduct: {
        productName: product.name,
        productPrice: product.price.toFixed(2),
        productDescription: product.description,
        productImg: product.img,
        productId: product.id,
      }
    })

    return ( 
      <div>
        {this.state.newProduct.productName}: ${this.state.newProduct.productPrice}
        </div>
    )
  }

  handleAddListItem=()=>{

  }

  render(){
    // console.log("allProductsList: ", this.state.allProductsList);
    // console.log("productsList: ", this.state.productsLists);

    // Products:
    let productsListArr = this.state.allProductsList.map((product)=>{
      return (
        <div className="product-card"
           
        >
          <h4>{product.name}</h4>
          <div>Price: ${product.price.toFixed(2)}</div>
          <br />
          <button onClick={()=>this.handleCartClick(product)} 
            type="submit">Add To Cart</button>
          <br />
          <img src={product.img} alt={product.name} />
          <br /><br />
          <div>{product.description}</div>
          <br /><br />
        </div>
      )
    })

    // Cart:
    let productsLists = this.state.allProductsList.map((product, i)=>{
      return (
        <div>
          <li key={product + i} 
          product={this.state.product}
          >          
            {this.state.newProduct.productName}: ${this.state.newProduct.productPrice}
          </li>
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
            <li>{productsLists}</li>
          </ul>
          <div><h3>Subtotal: ${this.state.productPrice}</h3></div>
          <div><h3>Tax: ${this.state.productPrice}</h3></div>
          <div><h3>Total: ${this.state.productPrice}</h3></div>
        </div>

        {/* END - cart section */}
        {/* START - checkout section */}
        <div className="form-container">
          <h3>Checkout</h3>
          <form id="checkout">
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
        {/* END - checkout section */}
      </div>
    )
  }
}

export default App;

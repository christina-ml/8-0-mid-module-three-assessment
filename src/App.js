import { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import productData from "./data/productData";

class App extends Component{
  constructor(){
    super();

    this.state = {
      allProductsList: productData,
      productsLists: [],
      newProduct: {
        productName: '',
        productPrice: 0,
        productDescription: '',
        productImg: "",
        productId: '',
    },
    }
  }

  // Cart:
  handleCartClick=(product)=>{
    console.log("clicked product's name:", product.name)
    console.log("clicked product's price:", product.price.toFixed(2))

    this.setState({
      newProduct: product,
    })
  }

  addProduct= () => {
    const { productsLists, newProduct } = this.state;
    this.setState({
      newProduct: [...productsLists, newProduct]
    })
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
          <button onClick={this.addProduct} 
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
        <h2 className="header">Christina's Garage Sale</h2>
        {/* START - products section */}
        <div className="products-container">
          <h3>Products</h3>
          <div className="products">
            {productsListArr}
          </div>
        </div>
        {/* END - products section */}
        {/* START - cart section */}

        <ShoppingCart productsLists={this.productsLists}/>

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

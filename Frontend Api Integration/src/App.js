import { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
// importing css
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
// importing js
import abcImage from "./poster.png";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    console.log("data", data);
    setProducts(data.data);
  };
  return (
    <div className="App">
      <header>
        <div className="row uni-padding" id="topbar">
          <div className="col-lg-6 col-sm-8">
            <h1>NORDIC ROSE</h1>
          </div>
          <div className="col-lg-6 col-sm-4" id="navbar">
            {products.map((product) => {
              return (
                <ul>
                  <li>
                    <a href="" id="blog">
                      {product.title}
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

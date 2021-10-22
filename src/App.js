import React, {useEffect, useState} from 'react';
import './App.css';
import Product from './component/Product'

const FEATURED_API = "https://fakestoreapi.com/products";
let defaultProducts = [];

function App() {
  const [products, setproducts] = useState([]);
  const [searchvalue, setSearchvalue] = useState('');

  useEffect(() => {
    getProducts(FEATURED_API);
  },[]);

  const getProducts = (API) => {
    setSearchvalue('');
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setproducts(data);

      defaultProducts = data;
      // console.log('default', defaultProducts);
    });
  }

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchvalue(e.target.value);
  }
  
  useEffect(() => {
    //console.log(searchvalue);
    let value = searchvalue.toLowerCase().replace( /\s/g , '' );
    filterProducts(value);
  }, [searchvalue]);

  const filterProducts = (value) => {
    //console.log(value);
    const filteredProducts = defaultProducts.filter((product) => {
      let str = product.title.toLowerCase().replace( /\s/g , '' );
      return str.includes(value.toLowerCase());
    });
    // console.log(filteredProducts);
    setproducts(filteredProducts);
  }

  return (
    <div className="app">
      <header className="header">
        <h2 onClick={() => getProducts(FEATURED_API)}>Shopify</h2>
        <span className="search-bar">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input type="text" className="search-input" placeholder="Search" value={searchvalue} onChange={handleOnChange}></input>
        </span>
      </header>
      
      <div className="product-container">
        {products.length > 0 && products.map((product) => {
          return <Product  key={product.id} {...product} />
        })}
      </div>  
      
    </div>
  );
}

export default App;

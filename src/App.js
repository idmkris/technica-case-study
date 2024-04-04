// App.js
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };

  const addToCart = (productToAdd) => {
    const existingProduct = cart.find(
      (product) => product.id === productToAdd.id
    );
    if (existingProduct) {
      // If the product already exists in the cart, update its quantity
      const updatedCart = cart.map((product) => {
        if (product.id === productToAdd.id) {
          return {
            ...product,
            quantity: product.quantity + 1, // Increment quantity
          };
        } else {
          return product;
        }
      });
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }

    const requestData = {
      userId: 1, 
      products: cart.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
    };

    // Send the POST request to the API
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Products added to cart:", data);
      })
      .catch((error) => {
        console.error("Error adding products to cart:", error);
      });
  };

  return (
    <div>
      <Navbar onSearchChange={handleSearchChange} toggleCart={toggleCart} />
      <ProductList searchQuery={searchQuery} addToCart={addToCart} />
      {isCartOpen && (
        <Cart
          setCart={setCart}
          cart={cart}
          onClose={toggleCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      )}
    </div>
  );
}

export default App;

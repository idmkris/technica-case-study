// ProductList.js
import React, { useState, useEffect } from "react";
import Product from "./Product";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

function ProductList({ addToCart, searchQuery }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products based on search query
    const fetchProducts = async () => {
      try {
        let apiUrl = "https://dummyjson.com/products";
        if (searchQuery) {
          if (categories.includes(searchQuery)) {
            apiUrl = `https://dummyjson.com/products/category/${searchQuery}`;
          } else {
            apiUrl = `https://dummyjson.com/products/search?q=${searchQuery}`;
          }
        }
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <div className="ml-20 mr-20 mt-10">
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div className="border border-gray-300 p-4">
            <Product
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

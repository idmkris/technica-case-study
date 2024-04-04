import React from "react";

function Product({ product, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(product);
    console.log();
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3>{product.title}</h3>
        <p className="text-gray-700 text-sm">{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

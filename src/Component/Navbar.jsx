// Navbar.js
import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

function Navbar({ onSearchChange, toggleCart }) {
  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearchChange(query);
  };

  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      {/* Logo or brand */}
      <div>
        <h1 className="text-white text-xl font-bold">My E-commerce</h1>
      </div>
      {/* Search bar */}
      <div className="flex items-center">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-600 bg-gray-200 rounded-full py-2 px-6 pr-10 focus:outline-none w-full focus:ring focus:border-blue-300"
            onChange={handleSearchChange}
          />
          <SearchIcon className="absolute right-3 top-3 text-gray-500" />
        </div>
        {/* Cart button */}
        <ShoppingBagIcon onClick={toggleCart} className="relative text-white cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;


// components/SearchBar.js
import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="my-12 text-center">
      <div className="flex justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Search for places or hotels"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md p-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-bold text-black bg-white transition duration-300 ease-in-out"
        />
        <button
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

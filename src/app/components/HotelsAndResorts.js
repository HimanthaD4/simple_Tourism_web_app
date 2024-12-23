import React from 'react';

const HotelsAndResorts = ({ hotels = [] }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-6">Hotels and Resorts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={hotel.image} alt={hotel.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{hotel.title}</h3>
                <p className="text-gray-700">{hotel.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default HotelsAndResorts;

'use client';

import React from 'react';

const DestinationList = ({ destinations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {destinations.map((destination) => (
        <div
          key={destination.destination_id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold">{destination.name}</h2>
          <p className="text-sm text-gray-600">{destination.city}</p>
          <p className="mt-2 text-gray-700">{destination.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;

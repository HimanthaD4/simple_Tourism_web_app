'use client';

import React from 'react';

const DestinationDetail = ({ destination }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{destination.name}</h1>
      <p className="mt-2 text-gray-600">{destination.description}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Address:</h3>
        <p>{destination.address}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Contact:</h3>
        <p>{destination.contact_number}</p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {destination.images.map((image, index) => (
          <img
            key={index}
            src={image.image_url}
            alt={image.alt_text}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationDetail;

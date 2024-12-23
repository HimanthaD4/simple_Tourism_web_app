import React from 'react';

const PlacesToVisit = ({ places = [] }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-6">Places to Visit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.length > 0 ? (
          places.map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{place.title}</h3>
                <p className="text-gray-700">{place.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No places found.</p>
        )}
      </div>
    </div>
  );
};

export default PlacesToVisit;

import { useEffect, useState } from 'react';

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('/api/destinations')
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Travel Destinations</h1>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

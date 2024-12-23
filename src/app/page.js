'use client';

import React, { useState } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import SearchBar from '../app/components/SearchBar';
import PlacesToVisit from '../app/components/PlacesToVisit';
import HotelsAndResorts from '../app/components/HotelsAndResorts';
import ImageCarousel from '../app/components/ImageCarousel';
import LoginRegisterModal from '../app/components/LoginRegisterModal';
import { placesToVisit, hotelsAndResorts } from '../app/data';

const Home = () => {
  const carouselImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ];
  
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState({ login: false, register: false });

  const filteredPlaces = (placesToVisit || []).filter((place) =>
    place.title.toLowerCase().includes(query.toLowerCase()) ||
    place.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredHotels = (hotelsAndResorts || []).filter((hotel) =>
    hotel.title.toLowerCase().includes(query.toLowerCase()) ||
    hotel.description.toLowerCase().includes(query.toLowerCase())
  );

  // Handle showing login or register modal
  const handleModalToggle = (type) => {
    setShowModal({ ...showModal, [type]: !showModal[type] });
  };

  return (
    <div className="font-sans bg-gray-100">
      <Navbar
        handleLoginToggle={() => handleModalToggle('login')}
        handleRegisterToggle={() => handleModalToggle('register')}
      />
      <ImageCarousel />
      <SearchBar query={query} setQuery={setQuery} />
      <PlacesToVisit places={filteredPlaces} />
      <HotelsAndResorts hotels={filteredHotels} />
      <Footer />
      <LoginRegisterModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Home;

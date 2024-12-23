'use client';

import React, { useState } from 'react';

const LoginRegisterModal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (type) => {
    try {
      const endpoint = type === 'login' ? '/api/login' : '/api/register';
      const response = await fetch(`${window.location.origin}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      setMessage(result.message || 'Success!');
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  if (!showModal.login && !showModal.register) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-60 flex justify-center items-center z-40">
      <div className="bg-white p-6 rounded shadow-xl w-full sm:w-96">
        <h2 className="text-2xl mb-4">
          {showModal.login ? 'Login' : 'Register'}
        </h2>
        {message && <p className="mb-4 text-red-500">{message}</p>}
        
        {showModal.register && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        
        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={() => handleSubmit(showModal.login ? 'login' : 'register')}
        >
          {showModal.login ? 'Login' : 'Register'}
        </button>
        
        <button
          className="w-full mt-2 bg-gray-300 p-2 rounded"
          onClick={() => setShowModal({ login: false, register: false })}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginRegisterModal;

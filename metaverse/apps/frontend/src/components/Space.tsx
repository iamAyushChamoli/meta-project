import React, { useState } from 'react';
import axios from 'axios';

const Space: React.FC = () => {
  const [name, setName] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [spaceId, setSpaceId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Token not found');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/space',
        { name, dimensions },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem('spaceId', response.data.spaceId);
      setSpaceId(response.data.spaceId);
    } catch (error) {
      console.error('Error creating space:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(spaceId);
    alert('Space ID copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Dimensions:
            <input
              type="text"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
      {spaceId && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-md text-center">
          <p className="text-gray-700">Space ID: {spaceId}</p>
          <button onClick={handleCopy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">
            Copy Space ID
          </button>
        </div>
      )}
    </div>
  );
};

export default Space;
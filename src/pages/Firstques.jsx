import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import poemback from '../assets/poemback.png';

const Firstques = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/second', { state: { name } });
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${poemback})` }}
    >
      <form
        onSubmit={(e) => { e.preventDefault(); handleNext(); }}
        className="flex flex-col items-center border border-red-300 rounded-2xl bg-black bg-opacity-30 p-4"
      >
        <div className="mb-4">
          <label className="flex flex-col items-center gap-6">
            <h3 className="text-red-300 text-center mb-2 text-2xl font-semibold">What is your Name?</h3>
            <input
              className="w-80 sm:w-96 h-12 rounded-xl p-2"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-80 sm:w-96 h-12 rounded-xl bg-black text-white transition duration-300 hover:bg-gray-900 hover:text-gray-400 hover:shadow-lg"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Firstques;

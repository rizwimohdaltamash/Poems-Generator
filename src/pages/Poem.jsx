import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import poemback from '../assets/poemback.png';

const Poem = () => {
  const [poem, setPoem] = useState('');
  // const [error,setError] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { name, favoriteWord } = location.state || {};

//   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generatePoem = async () => {
      try {
        const response = await axios({
          url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDeshisrCmm1NHqaRTndP_HoU7FESLoxgw",
          method: "post",
          data: { contents: [{ parts: [{ text: `Write a poem of 150 words with ${favoriteWord} and ${name}` }] }] }
        });

        setPoem(response.data.candidates[0].content.parts[0].text);
      } catch (err) {
        alert('Failed to generate poem');
      }
    };

    if (name && favoriteWord) {
      generatePoem();
    }
  }, [name, favoriteWord]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: `url(${poemback})` }}
    >
      {/* {error && <p className="text-red-500">{error}</p>} */}
      {poem ? (
        <div className="border-2 border-[#FFAAA3] flex flex-col items-center p-8 rounded-2xl bg-[#250A1E80] w-[70%] h-[70%]  md:w-2/3 lg:w-[70%] lg:h-[70%]">
          <h2 className="text-center text-[#FFAAA3] text-xl font-bold mb-4">Your Poem</h2>
          <p className="text-[#FFAAA3] text-center lg:w-[25%] w-full lg:h-[80%] h-full overflow-y-auto no-scrollbar">{poem}</p>

          <div className="flex justify-center mt-6 ">
            <button
              onClick={handleBackToHome}
              className="bg-black text-[#FFAAA3] py-2 px-4 rounded-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Poem;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import poemback from "../assets/poemback.png";

const Secondques = () => {
  const [favoriteWord, setFavoriteWord] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  const handleNext = () => {
    navigate("/poem", { state: { name, favoriteWord } });
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${poemback})` }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
        className="flex flex-col items-center border border-red-300 rounded-2xl bg-black bg-opacity-30 p-4"
      >
        <div className="mb-4">
          <label className="flex flex-col items-center">
            <h3 className="text-red-300 text-center mb-2 text-2xl font-semibold">
              Your favorite Word?
            </h3>
            <br />
            <input
              className="w-80 sm:w-96 h-12 rounded-xl p-2"
              type="text"
              placeholder="Enter your favourite word"
              value={favoriteWord}
              onChange={(e) => setFavoriteWord(e.target.value)}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-80 sm:w-96 h-12 rounded-xl bg-black text-white transition duration-300 hover:bg-gray-900 hover:text-gray-400 hover:shadow-lg"
        >
          Generate Poem
        </button>
      </form>
    </div>
  );
};

export default Secondques;

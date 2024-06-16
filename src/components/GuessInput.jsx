import { useState } from 'react';

const GuessInput = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 5) {
      onGuess(guess);
      setGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-8">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength="5"
        className="p-2 text-lg border-2 border-blue-500 rounded mr-2 w-40"
        placeholder="Enter your guess"
      />
      <button
        type="submit"
        className="p-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Guess
      </button>
    </form>
  );
};

export default GuessInput;

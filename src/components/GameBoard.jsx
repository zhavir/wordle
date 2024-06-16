const GameBoard = ({ guesses, feedback }) => {
  return (
    <div className="mt-8">
      {guesses.map((guess, index) => (
        <div key={index} className="flex justify-center mb-2">
          {guess.split('').map((letter, i) => (
            <span
              key={i}
              className={`flex items-center justify-center w-10 h-10 m-1 text-white font-bold rounded ${
                feedback[index][i] === 'correct'
                  ? 'bg-green-600'
                  : feedback[index][i] === 'present'
                  ? 'bg-yellow-500'
                  : 'bg-gray-500'
              }`}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;

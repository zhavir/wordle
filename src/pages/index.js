import Head from 'next/head';
import { useState } from 'react';
import GameBoard from '../components/GameBoard';
import GuessInput from '../components/GuessInput';
import Feedback from '../components/Feedback';


export const generateRandomWord = (wordList) => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};

export const provideFeedback = (guess, target) => {
  let feedback = [];
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      feedback.push('correct');
    } else if (target.includes(guess[i])) {
      feedback.push('present');
    } else {
      feedback.push('absent');
    }
  }
  return feedback;
};


export default function Home() {
  const wordList = [
    'apple', 'grape', 'peach', 'melon', 'berry', 'lemon', 'mango', 'plums', 'guava'
  ];
  const [targetWord, setTargetWord] = useState(generateRandomWord(wordList));
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const handleGuess = (guess) => {
    const feedbackData = provideFeedback(guess, targetWord);
    setGuesses([...guesses, guess]);
    setFeedback([...feedback, feedbackData]);

    if (guess === targetWord || guesses.length + 1 === 6) {
      // Game over logic
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>CodeWordle</title>
      </Head>
      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-bold text-blue-500 mb-5">CodeWordle</h1>
        <GameBoard guesses={guesses} feedback={feedback} />
        <GuessInput onGuess={handleGuess} />
        <Feedback feedback={feedback} />
      </main>
    </div>
  );
}

import React, { useState } from "react";

export default function Quiz({ questions }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleOptionClick = (idx) => {
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === questions[current].correctIndex) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-lg">Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{q.question}</h2>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            className={`w-full py-2 px-4 rounded border ${
              selected === idx
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-blue-100"
            }`}
            onClick={() => handleOptionClick(idx)}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        onClick={handleNext}
        disabled={selected === null}
      >
        {current < questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
}
import React, { useState } from "react";

function InputPanel({ onSubmit, loading }) {
  const [question, setQuestion] = useState("");

  const handleClick = () => {
    if (question.trim() === "") return;
    onSubmit(question);
  };

  return (
    <div className="mb-6">
      <textarea
        className="w-full p-3 border rounded mb-2"
        rows="4"
        placeholder="Enter your legal question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
}

export default InputPanel;

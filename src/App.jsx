import React, { useState } from "react";
import InputPanel from "./components/InputPanel";
import AnswerPanel from "./components/AnswerPanel";

function App() {
  const [loading, setLoading] = useState(false);
  const [answerData, setAnswerData] = useState(null);

  const handleQuestionSubmit = (questionText) => {
    setLoading(true);

    setTimeout(() => {
      const response = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              '“as the age of the deceased at the time of accident was held to be about 54-55 years... (Para 7)”',
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };

      setAnswerData(response);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-4 bg-gray-100 max-w-4xl mx-auto mt-5">
      <h1 className="text-xl font-bold mb-4 text-center ">
        Lexi Legal Assistant
      </h1>
      <InputPanel onSubmit={handleQuestionSubmit} loading={loading} />
      {answerData && <AnswerPanel answerData={answerData} />}
      {!answerData && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">
              Example Query:
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?"
            </p>
          </div>
        )}
    </div>
  );
}

export default App;

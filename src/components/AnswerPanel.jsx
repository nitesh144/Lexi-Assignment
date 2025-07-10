
import React, { useState } from "react";
import danipdf from '../assets/Dani.pdf'

function AnswerPanel({ answerData }) {
    const [showPDF, setShowPDF] = useState(false);

    const openPDF = () => {
    
        setShowPDF(true);
    };

    const closePDF = () => {
        setShowPDF(false);
        
    };

    return (
        <div className="bg-white p-4 rounded shadow mb-5">
            <h2 className="text-lg font-semibold mb-2">Answer</h2>
            <p className="mb-4">{answerData.answer}</p>

            <h3 className="font-medium mb-1">Citation</h3>
            <ul className="list-disc pl-5 text-blue-600">
                {answerData.citations.map((item, index) => (
                    <li key={index}>
                        <button
                            onClick={() => openPDF()}
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            {item.text}
                        </button>
                    </li>
                ))}
            </ul>

            {/* PDF */}
            {showPDF && (
                <div className="fixed inset-0 bg-transparent bg-opacity-20 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-3xl h-[90%] mx-4 sm:mx-8 rounded shadow-lg relative flex flex-col">
                        <button
                            onClick={closePDF}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black z-10 "
                        >
                            &times;
                        </button>
                        <iframe
                            src={danipdf}
                            title="PDF Viewer"
                            className="w-full h-full rounded"
                        ></iframe>
                    </div>
                </div>
            )}

        </div>
    );
}

export default AnswerPanel;

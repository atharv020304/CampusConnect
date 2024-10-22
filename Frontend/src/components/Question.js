import React from 'react';

const Question = () => {
    
    const questions = [
        {
            question: "What is the capital of France?",
            answers: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Mars",
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean",
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
            correctAnswer: "Harper Lee",
        },
        {
            question: "What is the smallest prime number?",
            answers: ["0", "1", "2", "3"],
            correctAnswer: "2",
        },
    ];

    return (
        <div className="question-container">
            <h2>Quiz Questions</h2>
            {questions.map((item, index) => (
                <div key={index} className="question-item">
                    <h3>{item.question}</h3>
                    <ul>
                        {item.answers.map((answer, idx) => (
                            <li key={idx}>{answer}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Question;

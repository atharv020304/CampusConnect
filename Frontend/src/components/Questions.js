import React from 'react';

// Dummy data for questions and answers
const questionData = {
    question: {
        text: "What is the capital of France?",
        user: "User123",
        datePosted: "2 hours ago",
    },
    answers: [
        {
            text: "I think it's Paris!",
            user: "Answerer1",
            datePosted: "1 hour ago",
        },
        {
            text: "Definitely Paris.",
            user: "Answerer2",
            datePosted: "30 minutes ago",
        },
        {
            text: "I believe it’s Rome.",
            user: "Answerer3",
            datePosted: "15 minutes ago",
        },
    ],
};

const Question = () => {
    return (
        <div className="question-container">
            {/* Displaying the question */}
            <div className="question-item">
                <h3>{questionData.question.text}</h3>
                <p className="user-info">
                    Posted by {questionData.question.user} on {questionData.question.datePosted}
                </p>
            </div>

            {/* Displaying the answers */}
            <div className="answers-container">
                <h4>Answers:</h4>
                <ul>
                    {questionData.answers.map((answer, index) => (
                        <li key={index} className="answer-item">
                            <p>{answer.text}</p>
                            <p className="user-info">
                                Answered by {answer.user} on {answer.datePosted}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Question;

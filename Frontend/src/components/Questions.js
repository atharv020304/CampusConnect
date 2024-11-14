// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestions, postAnswer, fetchAnswers } from '../store/slices/questionSlice.js';
// import AddQuestion from './AddQuestion.js'

// const Questions = () => {
//     const dispatch = useDispatch();
//     const { questions, loading, error, message } = useSelector(state => state.questions);
    
//     const [answerContent, setAnswerContent] = useState({});

//     // Fetch all questions on component mount
//     useEffect(() => {
//         dispatch(fetchQuestions());
//     }, [dispatch]);

//     // Handle fetching answers for a specific question
//     const handleFetchAnswers = (questionId) => {
//         dispatch(fetchAnswers(questionId));
//     };

//     // Handle answer submission
//     const handleAnswerSubmit = (e, questionId) => {
//         e.preventDefault();
//         const answerData = { content: answerContent[questionId] };
//         dispatch(postAnswer({ questionId, answerData }));
//         setAnswerContent({ ...answerContent, [questionId]: '' }); // Clear input after submission
//     };

//     return (
//         <div className="questions-container">
//             {loading && <p>Loading questions...</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {message && <p style={{ color: 'green' }}>{message}</p>}

//             {/* AddQuestion Component */}
//             <AddQuestion />

//             {/* Displaying Questions */}
//             {questions.map((question) => (
//                 <div key={question._id} className="question-card">
//                     <h3>{question.title}</h3>
//                     <p>{question.content}</p>
//                     {question.image && (
//                         <img src={question.image} alt="Question" className="question-image" />
//                     )}

//                     {/* Button to load answers */}
//                     <button onClick={() => handleFetchAnswers(question._id)}>
//                         {question.answers && question.answers.length > 0 ? 'Reload Answers' : 'Load Answers'}
//                     </button>

//                     {/* Display answers if they exist */}
//                     {question.answers && question.answers.length > 0 && (
//                         <div className="answers-section">
//                             <h4>Answers:</h4>
//                             {question.answers.map((answer) => (
//                                 <div key={answer._id} className="answer-card">
//                                     <p>{answer.content}</p>
//                                     <small>Answered by: {answer.answeredBy}</small>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {/* Answer form */}
//                     <form onSubmit={(e) => handleAnswerSubmit(e, question._id)} className="answer-form">
//                         <input
//                             type="text"
//                             value={answerContent[question._id] || ''}
//                             onChange={(e) => setAnswerContent({ ...answerContent, [question._id]: e.target.value })}
//                             placeholder="Write your answer..."
//                             required
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Questions;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestions, postAnswer, fetchAnswers } from '../store/slices/questionSlice.js';
// import AddQuestion from './AddQuestion.js';

// const Questions = () => {
//     const dispatch = useDispatch();
//     const { questions, loading, error, message } = useSelector((state) => state.questions);
    
//     // State to manage the answer content for each question
//     const [answerContent, setAnswerContent] = useState({});

//     // Fetch all questions on component mount
//     useEffect(() => {
//         dispatch(fetchQuestions());
//     }, [dispatch]);

//     // Handle fetching answers for a specific question
//     const handleFetchAnswers = (questionId) => {
//         dispatch(fetchAnswers(questionId));
//     };

//     // Handle answer submission
//     const handleAnswerSubmit = (e, questionId) => {
//         e.preventDefault();
    
//         // Prepare the answer data with the content
//         const answerData = {
//             content: answerContent[questionId], // assuming answerContent stores the content for each question
//         };
    
//         // Ensure the content is not empty before dispatching
//         if (!answerData.content || answerData.content.trim() === "") {
//             console.log("Answer content is empty!");
//             return;
//         }
    
//         console.log("Posting Answer with Data: ", answerData);
    
//         // Dispatch the postAnswer action with the questionId and answerData
//         dispatch(postAnswer(questionId, answerData));
    
//         // Clear the answer content after posting
//         setAnswerContent({ ...answerContent, [questionId]: "" });
//     };
    
    

//     return (
//         <div className="questions-container">
//             {loading && <p>Loading questions...</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {message && <p style={{ color: 'green' }}>{message}</p>}

//             {/* AddQuestion Component */}
//             <AddQuestion />

//             {/* Displaying Questions */}
//             {questions.map((question) => (
//                 <div key={question._id} className="question-card">
//                     <h3>{question.title}</h3>
//                     <p>{question.content}</p>
//                     {question.image && (
//                         <img src={question.image} alt="Question" className="question-image" />
//                     )}

//                     {/* Button to load answers */}
//                     <button onClick={() => handleFetchAnswers(question._id)}>
//                         {question.answers && question.answers.length > 0 ? 'Reload Answers' : 'Load Answers'}
//                     </button>

//                     {/* Display answers if they exist */}
//                     {question.answers && question.answers.length > 0 && (
//                         <div className="answers-section">
//                             <h4>Answers:</h4>
//                             {question.answers.map((answer) => (
//                                 <div key={answer._id} className="answer-card">
//                                     <p>{answer.content}</p>
//                                     <small>Answered by: {answer.answeredBy}</small>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {/* Answer form */}
//                     <form onSubmit={(e) => handleAnswerSubmit(e, question._id)} className="answer-form">
//                         <input
//                             type="text"
//                             value={answerContent[question._id] || ''}
//                             onChange={(e) => setAnswerContent({ ...answerContent, [question._id]: e.target.value })}
//                             placeholder="Write your answer..."
//                             required
//                         />
//                         <button type="submit">Submit Answer</button>
//                     </form>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Questions;








// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestions, postAnswer, fetchAnswers } from '../store/slices/questionSlice.js';
// import AddQuestion from './AddQuestion.js';

// const Questions = () => {
//     const dispatch = useDispatch();
//     const { questions, loading, error, message } = useSelector(state => state.questions);
    
//     const [content, setContent] = useState({});

//     // Fetch all questions on component mount
//     useEffect(() => {
//         dispatch(fetchQuestions());
//     }, [dispatch]);

//     // Handle fetching answers for a specific question
//     const handleFetchAnswers = (questionId) => {
//         dispatch(fetchAnswers(questionId));
//     };

//     // Handle answer submission
//     const handleAnswerSubmit = (e, questionId) => {
//         e.preventDefault();
        
//         // Check if the answer content for the question is empty or not
//         if (!content[questionId] || content[questionId].trim() === '') {
//             console.error("Answer content is empty");
//             return;
//         }
        
//         const answerData = { content: content[questionId] };
//         console.log("Answer Data: ", answerData); // Log the answer data to verify it's correct

//         // Dispatch the action to post the answer
//         dispatch(postAnswer({ questionId, answerData }));

//         // Clear the input field after submission
//         setContent({ ...content, [questionId]: '' });
//     };

//     return (
//         <div className="questions-container">
//             {loading && <p>Loading questions...</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {message && <p style={{ color: 'green' }}>{message}</p>}

//             {/* AddQuestion Component */}
//             <AddQuestion />

//             {/* Displaying Questions */}
//             {questions.map((question) => (
//                 <div key={question._id} className="question-card">
//                     <h3>{question.title}</h3>
//                     <p>{question.content}</p>
                   
//                     {/* Button to load answers */}
//                     <button onClick={() => handleFetchAnswers(question._id)}>
//                         {question.answers && question.answers.length > 0 ? 'Reload Answers' : 'Load Answers'}
//                     </button>

//                     {/* Display answers if they exist */}
//                     {question.answers && question.answers.length > 0 && (
//                         <div className="answers-section">
//                             <h4>Answers:</h4>
//                             {question.answers.map((answer) => (
//                                 <div key={answer._id} className="answer-card">
//                                     <p>{answer.content}</p>
//                                     <small>Answered by: {answer.answeredBy}</small>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {/* Answer form */}
//                     <form onSubmit={(e) => handleAnswerSubmit(e, question._id)} className="answer-form">
//                         <input
//                             type="text"
//                             value={content[question._id] || ''}  // Bind value to the content of the current question
//                             onChange={(e) => setContent({ ...content, [question._id]: e.target.value })}  // Update content for the specific question
//                             placeholder="Write your answer..."
//                             required
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Questions;




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, postAnswer, fetchAnswers, clearAllQuestionErrors } from '../store/slices/questionSlice.js';
import AddQuestion from './AddQuestion.js';
import "./Questions.css";

const Questions = () => {
    const dispatch = useDispatch();
    const { questions, loading, error, message, answers } = useSelector(state => state.questions);

    useEffect(() => {
        dispatch(fetchQuestions());
        dispatch(clearAllQuestionErrors());
        console.log(answers); // Clear any errors when component mounts
    }, [dispatch,answers]);

    const handleAnswerSubmit = (e, questionId) => {
        e.preventDefault();

        // Get the content from the textarea directly using DOM method
        const answerContent = document.getElementById(`answer-input-${questionId}`).value.trim();

        // Check if the answer content is not empty
        if (answerContent) {
            // Dispatch the action to post the answer
            dispatch(postAnswer(questionId, { content: answerContent }));

            // Fetch the updated answers for the specific question
            dispatch(fetchAnswers(questionId));

            // Clear the input field after submission
            document.getElementById(`answer-input-${questionId}`).value = '';
        } else {
            console.error("Answer content cannot be empty!");
        }
    };

    const handleFetchAnswers = (questionId) => {
        dispatch(fetchAnswers(questionId));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (message) return <div>{message}</div>;

    return (
        <div className="questions-container">
            <h1>Questions</h1>

            {/* AddQuestion Component */}
            <AddQuestion />

            {/* Displaying Questions */}
            <div className='question-container'>

            {questions.map((question) => (
                <div key={question._id} className="question-card">
                    <h3 className='question-title'>{question.title}</h3>
                    <p>{question.content}</p>
                   
                    {/* Button to load answers */}
                    <button onClick={() => handleFetchAnswers(question._id)}>
                        {question.answers && question.answers.length > 0 ? 'Reload Answers' : 'Load Answers'}
                    </button>

                    {/* Display answers if they exist */}
                    {question.answers && question.answers.length > 0 && (
                        <div className="answers-section">
                            <h4>Answers:</h4>
                            {question.answers.map((answer) => (
                                <div key={answer._id} className="answer-card">
                                    <p>{answer.content}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Answer form */}
                    <form onSubmit={(e) => handleAnswerSubmit(e, question._id)} className="answer-form">
                        <textarea
                            id={`answer-input-${question._id}`}  // Unique ID for each question's answer input
                            placeholder="Write your answer..."
                            className="answer-input"
                            required                            />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Questions;

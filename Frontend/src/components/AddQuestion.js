// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postQuestion } from '../store/slices/questionSlice.js';
// import './AddQuestions.css';

// const AddQuestion = () => {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//     const [description, setdescription] = useState('');

//     const handleCreateQuestion = (event) => {
//         event.preventDefault();

//         const questionData = {
//             title: title,
//             description: description, 
//         };

//         dispatch(postQuestion(questionData));

//         setTitle('');
//         setdescription('');
//     };

//     return (
//         <div className="add-question">
//             <h2>Ask a New Question</h2>
//             <form onSubmit={handleCreateQuestion}>
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Question title"
//                     required
//                 />
//                 <textarea
//                     value={description}
//                     onChange={(e) => setdescription(e.target.value)}
//                     placeholder="Describe your question"
//                     required
//                 />
//                 <button type="submit">Post Question</button>
//             </form>
//         </div>
//     );
// };

// export default AddQuestion;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postQuestion } from '../store/slices/questionSlice.js';
import './AddQuestions.css';

const AddQuestion = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateQuestion = (event) => {
        event.preventDefault();

        // Create FormData object
        const questionData = {
            title: title,
            description: description
        };

        dispatch(postQuestion(questionData));

        setTitle('');
        setDescription('');
    };

    return (
        <div className="add-question">
            <h2>Ask a New Question</h2>
            <form onSubmit={handleCreateQuestion}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Question title"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your question"
                    required
                />
                <button type="submit">Post Question</button>
            </form>
        </div>
    );
};

export default AddQuestion;

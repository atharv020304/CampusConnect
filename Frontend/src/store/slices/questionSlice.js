// // src/store/slices/questionSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// const BACKEND_URL = "http://localhost:2000/api/v1";

// // Async thunks
// export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
//     const response = await axios.get('/question/getall');
//     return response.data.questions;
// });

// export const postQuestion = createAsyncThunk('questions/postQuestion', async (questionData, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(`${BACKEND_URL}/question/post`, questionData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return response.data.question;
//     } catch (error) {
//         return rejectWithValue(error.response.data.message || "Failed to post question");
//     }
// });

// export const fetchAnswers = createAsyncThunk('questions/fetchAnswers', async (questionId, { rejectWithValue }) => {
//     try {
//         const response = await axios.get(`/question/getsingle/${questionId}`);
//         return { questionId, answers: response.data.question.answers };
//     } catch (error) {
//         return rejectWithValue(error.response.data.message || "Failed to fetch answers");
//     }
// });

// export const postAnswer = createAsyncThunk('questions/postAnswer', async ({ questionId, answerData }, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(`/answer/post/${questionId}`, answerData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return { questionId, answer: response.data.answer };
//     } catch (error) {
//         return rejectWithValue(error.response.data.message || "Failed to post answer");
//     }
// });

// // Slice
// const questionSlice = createSlice({
//     name: 'questions',
//     initialState: {
//         questions: [],
//         loading: false,
//         error: null,
//         message: '',
//     },
//     reducers: {
//         clearAllQuestionErrors: (state) => {
//             state.error = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchQuestions.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchQuestions.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.questions = action.payload;
//             })
//             .addCase(fetchQuestions.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             .addCase(postQuestion.fulfilled, (state, action) => {
//                 state.questions.push(action.payload);
//                 state.message = 'Question posted successfully';
//             })
//             .addCase(postQuestion.rejected, (state, action) => {
//                 state.error = action.payload;
//             })
//             .addCase(fetchAnswers.fulfilled, (state, action) => {
//                 const question = state.questions.find(q => q._id === action.payload.questionId);
//                 if (question) {
//                     question.answers = action.payload.answers;
//                 }
//             })
//             .addCase(fetchAnswers.rejected, (state, action) => {
//                 state.error = action.payload;
//             })
//             .addCase(postAnswer.fulfilled, (state, action) => {
//                 const { questionId, answer } = action.payload;
//                 const question = state.questions.find(q => q._id === questionId);
//                 if (question) {
//                     question.answers = [...(question.answers || []), answer];
//                 }
//                 state.message = 'Answer posted successfully';
//             })
//             .addCase(postAnswer.rejected, (state, action) => {
//                 state.error = action.payload;
//             });
//     },
// });

// export const { clearAllQuestionErrors } = questionSlice.actions;
// export default questionSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const BACKEND_URL = "http://localhost:2000/api/v1";

// // Slice
// const questionSlice = createSlice({
//     name: 'questions',
//     initialState: {
//         questions: [],
//         loading: false,
//         error: null,
//         message: '',
//     },
//     reducers: {
//         setLoading: (state, action) => {
//             state.loading = action.payload;
//         },
//         setQuestions: (state, action) => {
//             state.questions = action.payload;
//         },
//         setError: (state, action) => {
//             state.error = action.payload;
//         },
//         setMessage: (state, action) => {
//             state.message = action.payload;
//         },
//         clearAllQuestionErrors: (state) => {
//             state.error = null;
//         },
//     },
// });

// // Actions
// export const fetchQuestions = () => async (dispatch) => {
//     try {
//         dispatch(setLoading(true));
//         const response = await axios.get(`${BACKEND_URL}/question/getall`);
//         dispatch(setQuestions(response.data.questions));
//         dispatch(setLoading(false));
//     } catch (error) {
//         dispatch(setError(error.response?.data?.message || "Failed to fetch questions"));
//         dispatch(setLoading(false));
//     }
// };

// export const postQuestion = (questionData) => async (dispatch) => {
//     try {
//         dispatch(setLoading(true));
//         console.log(questionData);
//         const response = await axios.post(`${BACKEND_URL}/question/post`, questionData, {
    
//         });
//         dispatch(setQuestions((prevQuestions) => [...prevQuestions, response.data.question]));
//         dispatch(setMessage('Question posted successfully'));
//         dispatch(setLoading(false));
//     } catch (error) {
//         dispatch(setError(error.response?.data?.message || "Failed to post question"));
//         dispatch(setLoading(false));
//     }
// };

// export const fetchAnswers = (questionId) => async (dispatch) => {
//     try {
//         const response = await axios.get(`${BACKEND_URL}/question/getsingle/${questionId}`);
//         const answers = response.data.question.answers;
//         dispatch(setAnswers(questionId, answers));
//     } catch (error) {
//         dispatch(setError(error.response?.data?.message || "Failed to fetch answers"));
//     }
// };

// export const postAnswer = (questionId, answerData) => async (dispatch) => {
//     try {
//         const response = await axios.post(`${BACKEND_URL}/answer/post/${questionId}`, answerData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         dispatch(addAnswer(questionId, response.data.answer));
//     } catch (error) {
//         dispatch(setError(error.response?.data?.message || "Failed to post answer"));
//     }
// };

// // Reducers
// const { setLoading, setQuestions, setError, setMessage } = questionSlice.actions;

// export const setAnswers = (questionId, answers) => (dispatch, getState) => {
//     const state = getState();
//     const question = state.questions.find(q => q._id === questionId);
//     if (question) {
//         question.answers = answers;
//         dispatch(setQuestions([...state.questions])); // Re-set updated questions
//     }
// };

// export const addAnswer = (questionId, answer) => (dispatch, getState) => {
//     const state = getState();
//     const question = state.questions.find(q => q._id === questionId);
//     if (question) {
//         question.answers = [...(question.answers || []), answer];
//         dispatch(setQuestions([...state.questions])); // Re-set updated questions
//     }
// };

// export const { clearAllQuestionErrors } = questionSlice.actions;

// export default questionSlice.reducer;
























// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const BACKEND_URL = "http://localhost:2000/api/v1";

// // Slice
// const questionSlice = createSlice({
//     name: 'questions',
//     initialState: {
//         questions: [],
//         loading: false,
//         error: null,
//         message: '',
//     },
//     reducers: {
//         requestForAllQuestions(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForAllQuestions(state, action) {
//             state.loading = false;
//             state.questions = action.payload;
//             state.error = null;
//         },
//         failureForAllQuestions(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         requestForCreateQuestion(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForCreateQuestion(state, action) {
//             state.loading = false;
//             state.message = action.payload;
//             state.error = null;
//         },
//         failureForCreateQuestion(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         requestForAnswers(state, action) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForAnswers(state, action) {
//             state.loading = false;
//             const question = state.questions.find(q => q._id === action.payload.questionId);
//             if (question) {
//                 question.answers = action.payload.answers;
//             }
//             state.error = null;
//         },
//         failureForAnswers(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         clearAllQuestionErrors(state) {
//             state.error = null;
//             state.message = null;
//         },
//         resetQuestionSlice(state) {
//             state.error = null;
//             state.loading = false;
//             state.questions = [];
//             state.message = null;
//         },
//     },
// });

// // Actions
// export const fetchQuestions = () => async (dispatch) => {
//     try {
//         dispatch(questionSlice.actions.requestForAllQuestions());
//         const response = await axios.get(`${BACKEND_URL}/question/getall`);
//         dispatch(questionSlice.actions.successForAllQuestions(response.data.questions));
//     } catch (error) {
//         dispatch(questionSlice.actions.failureForAllQuestions(error.response?.data?.message || "Failed to fetch questions"));
//     }
// };

// export const postQuestion = (questionData) => async (dispatch) => {
//     try {
//         dispatch(questionSlice.actions.requestForCreateQuestion());
//         const response = await axios.post(`${BACKEND_URL}/question/post`, questionData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         dispatch(questionSlice.actions.successForCreateQuestion(response.data.message));
//         dispatch(fetchQuestions());  
//     } catch (error) {
//         dispatch(questionSlice.actions.failureForCreateQuestion(error.response?.data?.message || "Failed to post question"));
//     }
// };

// export const fetchAnswers = (questionId) => async (dispatch) => {
//     try {
//         dispatch(questionSlice.actions.requestForAnswers({ questionId }));
//         const response = await axios.get(`${BACKEND_URL}/question/getsingle/${questionId}`);
//         const answers = response.data.question.answers;
//         dispatch(questionSlice.actions.successForAnswers({ questionId, answers }));
//     } catch (error) {
//         dispatch(questionSlice.actions.failureForAnswers(error.response?.data?.message || "Failed to fetch answers"));
//     }
// };

// export const postAnswer = (questionId, answerData) => async (dispatch) => {
//     try {
//         const response = await axios.post(`${BACKEND_URL}/answer/post/${questionId}`, answerData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         dispatch(questionSlice.actions.successForAnswers({ questionId, answers: response.data.answers }));
//     } catch (error) {
//         dispatch(questionSlice.actions.failureForAnswers(error.response?.data?.message || "Failed to post answer"));
//     }
// };

// // Export actions
// export const { clearAllQuestionErrors, resetQuestionSlice } = questionSlice.actions;

// export default questionSlice.reducer;
























import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URL = "http://localhost:2000/api/v1";

// Slice
const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: [],
        loading: false,
        error: null,
        message: '',
        singleQuestion: {},
        answers: {},
    },
    reducers: {
        requestForAllQuestions(state) {
            state.loading = true;
            state.error = null;
        },
        successForAllQuestions(state, action) {
            state.loading = false;
            state.questions = action.payload;
            state.error = null;
        },
        failureForAllQuestions(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForCreateQuestion(state) {
            state.loading = true;
            state.error = null;
        },
        successForCreateQuestion(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        failureForCreateQuestion(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForUpdateQuestion(state) {
            state.loading = true;
            state.error = null;
        },
        successForUpdateQuestion(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        failureForUpdateQuestion(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForDeleteQuestion(state) {
            state.loading = true;
            state.error = null;
        },
        successForDeleteQuestion(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        failureForDeleteQuestion(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForAnswers(state, action) {
            state.loading = true;
            state.error = null;
            state.answers[action.payload] = [];
        },
        successForAnswers(state, action) {
            state.loading = false;
            state.answers[action.payload.questionId] = action.payload.answers;
            state.error = null;
        },
        failureForAnswers(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        clearAllQuestionErrors(state) {
            state.error = null;
            state.message = null;
        },
        resetQuestionSlice(state) {
            state.error = null;
            state.loading = false;
            state.questions = [];
            state.message = null;
            state.singleQuestion = {};
            state.answers = {};
        },
    },
});

// Actions
export const fetchQuestions = () => async (dispatch) => {
    try {
        dispatch(questionSlice.actions.requestForAllQuestions());
        const response = await axios.get(`${BACKEND_URL}/question/getall`);
        dispatch(questionSlice.actions.successForAllQuestions(response.data.questions));
    } catch (error) {
        dispatch(questionSlice.actions.failureForAllQuestions(error.response?.data?.message || "Failed to fetch questions"));
    }
};

export const postQuestion = (questionData) => async (dispatch) => {

    try {
        console.log(questionData)
        dispatch(questionSlice.actions.requestForCreateQuestion());

        const {title ,description} = questionData; 
        const response = await axios.post(`${BACKEND_URL}/question/post`, {title, description}, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        dispatch(questionSlice.actions.successForCreateQuestion(response.data.message));
        dispatch(fetchQuestions());  
    } catch (error) {
        dispatch(questionSlice.actions.failureForCreateQuestion(error.response?.data?.message || "Failed to post question"));
    }
};



export const fetchAnswers = (questionId) => async (dispatch) => {
    try {
        dispatch(questionSlice.actions.requestForAnswers({ questionId }));
        const response = await axios.get(`${BACKEND_URL}/question/getsingle/${questionId}`);
        const answers = response.data.question.answers;
        dispatch(questionSlice.actions.successForAnswers({ questionId, answers }));
    } catch (error) {
        dispatch(questionSlice.actions.failureForAnswers(error.response?.data?.message || "Failed to fetch answers"));
    }
};

// export const postAnswer = (questionId, answerData) => async (dispatch) => {
//     try {
        
//         const response = await axios.post(`${BACKEND_URL}/answer/post/${questionId}`, answerData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         dispatch(questionSlice.actions.successForAnswers({ questionId, answers: response.data.answers }));
//     } catch (error) {
//         dispatch(questionSlice.actions.failureForAnswers(error.response?.data?.message || "Failed to post answer"));
//     }
// };


export const postAnswer = (questionId, answerData) => async (dispatch) => {
    try {
        
        const {content} = answerData
        const response = await axios.post(`${BACKEND_URL}/answer/post/${questionId}`, content, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        dispatch(questionSlice.actions.successForAnswers({
            questionId,
            answers: response.data.answers, // assuming this is part of the response
        }));
    } catch (error) {
        console.error("Error posting answer:", error.response?.data);  // Log the error message from the backend
        dispatch(questionSlice.actions.failureForAnswers(
            error.response?.data?.message || "Failed to post answer"
        ));
    }
};



export const updateQuestion = (questionId, questionData) => async (dispatch) => {
    try {
        dispatch(questionSlice.actions.requestForUpdateQuestion());
        const response = await axios.put(`${BACKEND_URL}/question/update/${questionId}`, questionData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        dispatch(questionSlice.actions.successForUpdateQuestion(response.data.message));
        dispatch(fetchQuestions());
    } catch (error) {
        dispatch(questionSlice.actions.failureForUpdateQuestion(error.response?.data?.message || "Failed to update question"));
    }
};

export const deleteQuestion = (questionId) => async (dispatch) => {
    try {
        dispatch(questionSlice.actions.requestForDeleteQuestion());
        const response = await axios.delete(`${BACKEND_URL}/question/delete/${questionId}`, {
            headers: { 'Content-Type': 'application/json' },
        });
        dispatch(questionSlice.actions.successForDeleteQuestion(response.data.message));
        dispatch(fetchQuestions());
    } catch (error) {
        dispatch(questionSlice.actions.failureForDeleteQuestion(error.response?.data?.message || "Failed to delete question"));
    }
};

// Export actions
export const { clearAllQuestionErrors, resetQuestionSlice } = questionSlice.actions;

export default questionSlice.reducer;

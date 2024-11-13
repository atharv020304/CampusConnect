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
        dispatch(questionSlice.actions.requestForAnswers({ questionId })); // Dispatch loading state for answer

        const response = await axios.post(`${BACKEND_URL}/answer/post/${questionId}`, answerData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Assuming the response contains updated answers
        dispatch(questionSlice.actions.successForAnswers({
            questionId,
            answers: response.data.answers,
        }));
    } catch (error) {
        console.error("Error posting answer:", error.response?.data);
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

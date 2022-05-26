import {createStore} from 'redux';

const initialState = {
    likes: 10
};

const reducer = (state = initialState, action) => {
    if (action.type === 'liked') {
        return {
            ...state,
            likes: state.likes + 1
        };
    } else if (action.type === 'disliked') {
        return {
            ...state,
            likes: state.likes === 0 ? 0 : state.likes - 1
        };
    }
    return state;
};

const store = createStore(reducer);

export default store;


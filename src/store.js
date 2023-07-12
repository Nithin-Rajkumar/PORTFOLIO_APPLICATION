// store.js
import { createStore } from 'redux';

// Action Types
const SET_USER = 'SET_USER';

// Action Creators
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// Initial State
const initialState = {
  user: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Create Store
const store = createStore(reducer);

export default store;

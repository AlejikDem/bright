const ADD_ERROR = 'ADD_ERROR';
const HIDE_ERROR = 'HIDE_ERROR';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const addError = (name, error) => ({
  type: ADD_ERROR,
  payload: {
    name,
    error
  }
});

export const hideError = name => ({
  type: HIDE_ERROR,
  payload: name
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

const initialState = {};

export default function errors (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ERROR:
      return {
        ...state,
        [payload.name]: payload.error
      };
    case HIDE_ERROR:
      return {
        ...state,
        [payload]: null
      };
    case CLEAR_ERRORS:
      {
        return {};
      }
    default:
      return state;
  }
}
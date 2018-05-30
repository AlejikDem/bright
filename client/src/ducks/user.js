export const SET_USER = 'SET_USER';

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

const initialState = {
  user: {}
};

export default function user (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    default: 
      return state;
  }
}
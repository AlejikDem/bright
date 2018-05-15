export const SET_USER = 'SET_USER';

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

const initialState = {
  user: {},
  isLoggedIn: false,
};

export default function user (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
        isLoggedIn: true
      };
    default: 
      return state;
  }
}
export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const signOut = () => ({
  type: SIGN_OUT
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
    case SIGN_OUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false
      };
    default: 
      return state;
  }
}
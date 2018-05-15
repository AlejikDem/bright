export const SET_USER = 'SET_USER';
export const START_LOGIN = 'START_LOGIN';
export const START_SIGNUP = 'START_SIGNUP';

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const startLogin = creds => ({
  type: START_LOGIN,
  payload: creds
});

export const startSignUp = info => ({
  type: START_SIGNUP,
  payload: info
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
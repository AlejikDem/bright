export const START_INIT = 'START_INIT';
export const FINISH_INIT = 'FINISH_INIT';
export const START_LOGIN = 'START_LOGIN';
export const START_SIGNUP = 'START_SIGNUP';
export const START_LOGOUT = 'START_LOGOUT';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const startInit = () => ({
  type: START_INIT
});

export const finishInit = () => ({
  type: FINISH_INIT
});

export const startLogin = creds => ({
  type: START_LOGIN,
  payload: creds
});

export const startSignUp = info => ({
  type: START_SIGNUP,
  payload: info
});

export const startLogout = () => ({
  type: START_LOGOUT
});

export const setLoggedIn = bool => ({
  type: SET_LOGGED_IN,
  payload: bool
});

const initialState = {
  isInitiated: false,
  isLoggedIn: false 
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FINISH_INIT:
      return {
        ...state,
        isInitiated: true
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload
      };
    default:
      return state;
  }
}
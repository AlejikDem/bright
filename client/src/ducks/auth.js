export const START_INIT = 'START_INIT';
export const FINISH_INIT = 'FINISH_INIT';
export const START_LOGIN = 'START_LOGIN';
export const START_SIGNUP = 'START_SIGNUP';

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

const initialState = {
  isInitiated: false
};

export default function (state = initialState, { type }) {
  switch (type) {
    case FINISH_INIT:
      return {
        ...state,
        isInitiated: true
      };
    default:
      return state;
  }
}
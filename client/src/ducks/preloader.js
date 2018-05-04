export const SET_PRELOADER = 'SET_PRELOADER';

export const setPreloader = bool => ({
  type: SET_PRELOADER,
  payload: bool
});

export const initialState = {
  preloader: false
};

export default function preloader(state = initialState, { type, payload }){
  switch(type) {
    case SET_PRELOADER:
      return {
        ...state,
        preloader: payload
      };
    default:
      return state;
  }
}
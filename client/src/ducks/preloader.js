export const SET_PRELOADER = 'SET_PRELOADER';

export const setPreloader = bool => ({
  type: SET_PRELOADER,
  payload: bool
});

export const initialState = false;

export default function preloader(state = initialState, { type, payload }){
  switch(type) {
    case SET_PRELOADER:
      return payload;
    default:
      return state;
  }
}
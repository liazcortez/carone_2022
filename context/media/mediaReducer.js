import { 
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  GET_MEDIAS_MAIN_BANNER
 } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MEDIAS_MAIN_BANNER:
      return {
        ...state,
        mediasMainBanner: action.payload,
        loading: false,
        error: null
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case CLEAR_STATE:
      return {
        media: {},
        medias: [],
        loading: false,
        error: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
        }
    default:
      return state;
  }
};

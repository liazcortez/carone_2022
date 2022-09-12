import { 
  GET_CAMPAIGNS, 
  GET_CAMPAIGN, 
  CREATE_CAMPAIGN, 
  DELETE_CAMPAIGN, 
  UPDATE_CAMPAIGN, 
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING
 } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload,
        loading: false,
        error: null
      };
    case GET_CAMPAIGN:
      return {
      ...state,
        campaign: action.payload,
        loading: false,
        error: null
      };
    case CREATE_CAMPAIGN:
      return {
        ...state,
        loading: false,
        error: null
      };
    case DELETE_CAMPAIGN:
      state.campaigns = state.campaigns.filter( item => item._id.toString() !== action.payload.toString())
      return {
        ...state,
        campaign: null,
        loading: false,
        error: null
      };
    case UPDATE_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload,
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
        campaign: {},
        campaigns: [],
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

import React, { useReducer } from 'react';
import CampaignContext from './campaignContext';
import CampaignReducer from './campaignReducer';
import api from '../../api/api';
import { 
  GET_CAMPAIGNS, 
  GET_CAMPAIGN, 
  DELETE_CAMPAIGN, 
  SET_ERROR,
  SET_LOADING,
  CLEAR_STATE,
  CREATE_CAMPAIGN,
  UPDATE_CAMPAIGN
 } from '../types';

const CampaignState = props => {
  const initialState = {
    campaigns: [],
    campaign: {},
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(CampaignReducer, initialState);

  const createCampaign = async (campaign) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    setLoading();
    try {


      const res = await api.post(`campaigns`,campaign, config);
      dispatch({ type: CREATE_CAMPAIGN, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data})

    }
  }

  const updateCampaign = async (campaign, ID) => {
    const config =  {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    setLoading();
    try {
      const res = await api.put(`/campaigns/${ID}`, campaign, config);
      dispatch({ type: UPDATE_CAMPAIGN, payload: res.data.data })
    } catch (err) {
      if(err && err.response && err.response.data){
      dispatch({ type: SET_ERROR, payload: err.response.data})
      }
      else{
      dispatch({ type: SET_ERROR, payload: err})
      }
    }
  };

 

  //Get Campaigns
  const getCampaigns = async () => {
    clearState();
    setLoading();
    try {
      const res = await api.post(`/campaigns/getCampaignsV3`);

      dispatch({ type: GET_CAMPAIGNS, payload: res.data.results.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data})

    }
  };

   //Get Campaigns
   const getCampaign = async (campaignId) => {
    clearState();
    setLoading();
    try {
      const res = await api.get(`/campaigns/${campaignId}`);
      dispatch({ type: GET_CAMPAIGN, payload: res.data.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data})

    }
  };

  //Delete Campaign
  const deleteCampaign = async (campaignId) => {
    const config =  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    setLoading();
    try {
      
      const res = await api.delete(`/campaigns/${campaignId}`, config);
      dispatch({ type: DELETE_CAMPAIGN, payload: res.data.deletedId })
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data})

    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CampaignContext.Provider
      value={{
        loading: state.loading,
        campaigns: state.campaigns,
        campaign: state.campaign,
        error: state.error,
        createCampaign,
        updateCampaign,
        getCampaigns,
        getCampaign,
        deleteCampaign,
        clearState,
        setLoading,
      }}
    >
      {props.children}
    </CampaignContext.Provider>
  );
};

export default CampaignState;



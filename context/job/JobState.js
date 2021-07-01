import React, { useReducer } from "react";
import JobContext from "./jobContext";
import JobReducer from "./jobReducer";
import api from "../../api/api";
import {
  GET_JOBS_ADVANCED_SEARCH,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
} from "../types";

const JobState = (props) => {
  const initialState = {
    jobs: [],
    loading: false,
    error: null,
    results: null,
  };

  const [state, dispatch] = useReducer(JobReducer, initialState);

  //Get Jobs
  const getJobs = async (page, query) => {
    setLoading();
    try {
      const res = await api.get(
        `/jobs/advancedResults?page=${page}&limit=12&searchText=${query}`
      );
      dispatch({ type: GET_JOBS_ADVANCED_SEARCH, payload: res.data });
    } catch (err) {

      dispatch({ type: SET_ERROR, payload: err})


    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <JobContext.Provider
      value={{
        loading: state.loading,
        jobs: state.jobs,
        error: state.error,
        results: state.results,
        getJobs,
        clearState,
        setLoading,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobState;

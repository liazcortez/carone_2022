import React, { useReducer } from "react";
import ApplicantContext from "./applicantContext";
import ApplicantReducer from "./applicantReducer";
import api from "../../api/api";
import {
  GET_JOBS_ADVANCED_SEARCH,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  CREATE_APPLICANT
} from "../types";

const ApplicantState = (props) => {
  const initialState = {
    applicant: {},
    loading: false,
    error: null,
    results: null,
  };

  const [state, dispatch] = useReducer(ApplicantReducer, initialState);

  
  //Get Jobs
  const createApplicant = async (applicant) => {

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`
    //   }
    // };

    setLoading();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const res = await api.post(`/applicants`,applicant);
      dispatch({ type: CREATE_APPLICANT, payload: res.data });
    } catch (err) {

      dispatch({ type: SET_ERROR, payload: err})


    }
  };

 const createApplicantNoUser = async (applicant,data) => {

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`
    //   }
    // };

    setLoading();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const uploadConfig = await api.post("/utils/uploads/image", { type: data.file.type, folder: 'curriculumsRHCarone', fileName: data.file.name }, config);
      await api.put(uploadConfig.data.url, data.file,{ headers: { "Content-Type": data.file ? data.file.type : null }});
      const dataKey = uploadConfig.data.key;
      applicant.user.resume =  dataKey;
      const res = await api.post(`/applicants/noUser`,applicant);
      dispatch({ type: CREATE_APPLICANT, payload: res.data });
    } catch (err) {

      dispatch({ type: SET_ERROR, payload: err})


    }
  };

  //Clear State
  const clearState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ApplicantContext.Provider
      value={{
        loading: state.loading,
        applicant: state.applicant,
        error: state.error,
        results: state.results,
        createApplicant,
        createApplicantNoUser,
        clearState,
        setLoading,
      }}
    >
      {props.children}
    </ApplicantContext.Provider>
  );
};

export default ApplicantState;

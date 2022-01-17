import { useContext } from 'react';
import ApplicantContext from '../context/applicant/applicantContext';

const useApplicant = () => useContext(ApplicantContext);

export default useApplicant;

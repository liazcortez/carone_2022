import React, { useEffect } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';

import { Formik } from 'formik';
import AlertP from '../Alert';


import {
	Box,
	Button,
	Checkbox,
	FormHelperText,
	TextField,
	Typography,
	Avatar,
	Link,
} from '@mui/material';
import useAuth from './../../hooks/useAuth';
import useIsMountedRef from './../../hooks/useIsMountedRef';

const classes = {
  root: {}
};

const Register = ({setOpen=false, className, ...rest }) => {
  const { user,register, error, clearState } = useAuth();
  const isMountedRef = useIsMountedRef();

  useEffect(()=>{
	if(user && JSON.stringify(user) !== '{}' && setOpen){
	  setOpen(false);
	}
    //eslint-disable-next-line
	},[user]);

  const t = (translate)=>{
    let res = translate.split('.');
    return res[1];
  };
  
  return (
	<Formik
	initialValues={{
	  email: '',
	  name: '',
	  password: '',
	  password2: '',
	  role:'applicant'
	}}
	validationSchema={Yup.object().shape({
	  email: Yup.string().email(t("Yup.Email")).max(255).required(t("Yup.Email is required")),
	  name: Yup.string().max(255).required('Name is required'),
	  password: Yup.string().min(7).max(255).required('Password is required'),
	  policy: Yup.boolean().oneOf([true], 'This field must be checked')
	})}
	onSubmit={async (values, {
	  setErrors,
	  setStatus,
	  setSubmitting
	}) => {
	  try {
	    if(values.password === values.password2){
	      await register(values);
  
	      if (isMountedRef.current) {
		if(!error){
		  setStatus({ success: true });
		  setSubmitting(false);
		  if(setOpen){
			setOpen(false);
		      }
		}
	      }
	    }else{
	    setErrors({ submit: 'Passwords do not match' });
	    }
	  } catch (err) {
	    console.error(err);
	    setStatus({ success: false });
	    setErrors({ submit: err.message });
	    setSubmitting(false);
	  }
	}}
      >
	{({
	  errors,
	  handleBlur,
	  handleChange,
	  handleSubmit,
	  isSubmitting,
	  touched,
	  values
	}) => (
	  <form
	    noValidate
	    className={clsx(classes.root, className)}
	    onSubmit={handleSubmit}
	    {...rest}
	  >
		<div style={{display: 'flex', justifyContent: 'center'}}>
		<Avatar
			style={{width: 150, height: 150}}
			src="/static/login.png"
		/>
		</div>
	    <TextField
	      error={Boolean(touched.name && errors.name)}
	      fullWidth
	      helperText={touched.name && errors.name}
	      label={t("Forms.Name")}
	      margin="normal"
	      name="name"
	      onBlur={handleBlur}
	      onChange={handleChange}
	      type="text"
	      value={values.name}
	      variant="outlined"
	    />
	    <TextField
	      error={Boolean(touched.email && errors.email)}
	      fullWidth
	      helperText={touched.email && errors.email}
	      label={t("Forms.Email")}
	      margin="normal"
	      name="email"
	      onBlur={handleBlur}
	      onChange={handleChange}
	      type="email"
	      value={values.email}
	      variant="outlined"
	    />
	    <TextField
	      error={Boolean(touched.password && errors.password)}
	      fullWidth
	      helperText={touched.password && errors.password}
	      label={t("Forms.Password")}
	      margin="normal"
	      name="password"
	      onBlur={handleBlur}
	      onChange={handleChange}
	      type="password"
	      value={values.password}
	      variant="outlined"
	    />
	    <TextField
	      error={Boolean(touched.password2 && errors.password2)}
	      fullWidth
	      helperText={touched.password2 && errors.password2}
	      label={t("Forms.ConfirmPassword")}
	      margin="normal"
	      name="password2"
	      onBlur={handleBlur}
	      onChange={handleChange}
	      type="password"
	      value={values.password2}
	      variant="outlined"
	    />
	    {error && <AlertP severity="error" msg={error.error}/>}
	    {errors.submit && (
	      <Box mt={3}>
		<FormHelperText error>
		  {errors.submit}
		</FormHelperText>
	      </Box>
	    )}
	    <Box mt={2}>
	      <Button
		color="primary"
		fullWidth
		size="large"
		type="submit"
		variant="contained"
	      >
		Registrate
	      </Button>
	    </Box>
	  </form>
	)}
      </Formik>
  );
};

export default Register;
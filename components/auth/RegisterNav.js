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
	makeStyles
} from '@material-ui/core';
import useAuth from './../../hooks/useAuth';
import useIsMountedRef from './../../hooks/useIsMountedRef';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Register = ({setOpen=false, setType, className, ...rest }) => {
  const classes = useStyles();
  const { user,register, error } = useAuth();
  const isMountedRef = useIsMountedRef();


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
	  email: Yup.string().email(t("Yup.Email")).max(255).required(t("Yup.EmailReq")),
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
      style={{width: '100%', padding: 20}}
      noValidate
	    className={clsx(classes.root, className)}
	    onSubmit={handleSubmit}
	    {...rest}
	  >
	    <center>
        <Typography style={{padding: 5}} variant='h4'>Registrate</Typography>
        <Typography 
          style={{padding: 5, cursor: 'pointer'}} 
          variant='body2' 
          color='primary'
          onClick={()=>setType('login')}
        >
          Ya tengo cuenta
        </Typography>
      </center>
	    <TextField
	      error={Boolean(touched.name && errors.name)}
	      fullWidth
	      helperText={touched.name && errors.name}
	      label={"Nombre"}
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
	      label={'Corre Electrónico'}
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
	      label={'Contraseña'}
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
	      label={'Confirmar Contraseña'}
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
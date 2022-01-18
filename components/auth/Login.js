import React, { useEffect } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';

import { Formik } from 'formik';
import AlertP from '../Alert';


import {
  Box,
  Button,
  FormHelperText,
  TextField,
  makeStyles,
  Avatar
} from '@material-ui/core';
import useAuth from './../../hooks/useAuth';
import useIsMountedRef from './../../hooks/useIsMountedRef';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Login = ({setOpen=false, className, ...rest }) => {
  const classes = useStyles();
  const {user, login, error, clearState } = useAuth();
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
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email(t("Yup.Email")).max(255).required(t("Yup.EmailReq")),
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          await login(values);

          if (isMountedRef.current) {
            if(!error){
              setStatus({ success: true });
              setSubmitting(false);
            }
          }
          
        } catch (err) {
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.error });
            setSubmitting(false);
          }
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
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Avatar
              style={{width: 150, height: 150}}
              src="/static/login.png"
          />
          </div>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
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
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Ingresar
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Login;
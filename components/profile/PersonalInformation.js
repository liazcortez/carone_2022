import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import useAuth from '../../hooks/useAuth';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField
} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {}
}));

const GeneralSettings = ({ className, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { error, updateProfile, user } = useAuth();
  const [submitedForm, setSubmitedForm] = useState(false);

  useEffect(() => {
    
    if(submitedForm){
      if(!error){
        enqueueSnackbar("Perfil Actualizado", {
          variant: 'success'
        });
      }
      setSubmitedForm(false)
    }

    // eslint-disable-next-line
  }, [submitedForm]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: user && user.email || '',
        name: user && user.name || '',
        phone: user && user.phone || '',
        website: user && user.website || ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("Email no válido").max(255).required("Email requerido"),
        name: Yup.string().max(255).required('Name is required'),
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          
          await updateProfile(values, 'info');
          setSubmitedForm(true);
          
        } catch (err) {
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
        <form onSubmit={handleSubmit}>
          <Box
            className={clsx(classes.root, className)}
            {...rest}
          >
            <CardHeader title={"Información Personal"} />
            <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Nombre"
                    name="name"
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    disabled
                    label="Email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <CardHeader title={"Información de Contacto"} />

                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    label="Teléfono"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.website && errors.website)}
                    fullWidth
                    label="Website"
                    name="website"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.website}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="flex-end"
            >
              <Button
                color="primary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Guardar
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Formik>

  );
  
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default GeneralSettings;

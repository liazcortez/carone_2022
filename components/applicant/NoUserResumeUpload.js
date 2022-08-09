import React, { useEffect } from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
  Button,
  TextField,
  CardHeader,
  FormHelperText,
} from "@mui/material";
import { useSnackbar } from "notistack";
import useAuth from "../../hooks/useAuth";
import useApplicant from "../../hooks/useApplicant";
import DropzoneInput from "../../components/DropzoneInput";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import * as Yup from "yup";

import { Formik } from "formik";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import AlertP from "../Alert";
import NumberFormatPhone from "../../utils/masks/NumberFormatPhone";

const methodIcons = {
  Auth0: "/static/images/auth0.svg",
  FirebaseAuth: "/static/images/firebase.svg",
  JWT: "/static/images/jwt.svg",
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  bannerChip: {
    marginRight: theme.spacing(2),
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
    // width:'100%',
    maxWidth: "40rem",
  },
  currentMethodIcon: {
    height: 60,
    "& > img": {
      width: "auto",
      maxHeight: "100%",
    },
  },
  rightText: {
    float: "right",
  },
  flexEnd: {
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
  },
  previewChip: {
    minWidth: 160,
    maxWidth: 210,
  },
  flexEnd: {
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
    marginTop: ".5rem",
  },
  dropZone: {
    height: 250,
    width: "100%",
    padding: theme.spacing(3),
    outline: "none",
    display: "flex",
    justifyContent: "center",
    border: `1px dashed ${theme.palette.divider}`,
    flexWrap: "wrap",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  image: {
    width: 50,
  },
}));

const NoUserResumeUpload = ({
  job = false,
  setOpen = false,
  setModalPostulated = false,
  width = "50vw",
  ...rest
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const t = (translate) => {
    let res = translate.split(".");
    return res[1];
  };

  const [submit, setSubmit] = React.useState(false);

  const [file, setFile] = React.useState(null);

  const [lock, setLock] = React.useState(false);

  const {
    createApplicant,
    createApplicantNoUser,
    applicant,
    error,
    loading,
    clearState,
  } = useApplicant();

  useEffect(() => {
    if (!submit) return;
    if (!error) {
      enqueueSnackbar("Postulado correctamente", {
        variant: "success",
      });
    } else {
      console.log(error);
      enqueueSnackbar(error?.response?.data?.error, {
        variant: "warning",
      });
    }

    //eslint-disable-next-line
  }, [applicant, error, submit]);

  useEffect(() => {
    return () => {
      clearState();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Card>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          role: "applicant",
          password: "noPassUser",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required("Nombre es Requerido"),
          phone: Yup.string()
            .min(10, "Ingresa un Telefono con 10 Numeros")
            .required("Ingresa tu Telefono"),
          email: Yup.string()
            .email("Ingresa Un Correo Valido")
            .max(255)
            .required("Ingresa tu Correo"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            //       await register(values);
            createApplicantNoUser(
              { user: values, job: job },
              {
                file: file[0],
              }
            );
            setSubmit(true);
            if (setOpen) {
              setOpen(false);
            }

            if (useIsMountedRef.current) {
              if (!error) {
                setStatus({ success: true });
                setSubmitting(false);
                if (setOpen) {
                  setOpen(false);
                }
              }
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
          values,
        }) => (
          <CardContent
            style={{ width: width, padding: "4rem" }}
            className={classes.cardContent}
          >
            <Typography
              mb={3}
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
              {`Aplicar a ${job?.title}`}
            </Typography>
            <form noValidate onSubmit={handleSubmit} {...rest}>
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
                error={Boolean(touched.phone && errors.phone)}
                fullWidth
                helperText={touched.phone && errors.phone}
                label={"Telefono"}
                margin="normal"
                name="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                type="phone"
                value={values.phone}
                variant="outlined"
                InputProps={{
                  inputComponent: NumberFormatPhone,
                }}
                InputLabelProps={{
                  shrink: values.phone !== "" || touched.phone,
                }}
              />
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label={"Email"}
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />

              <Box flexGrow={1} mt={3}>
                <DropzoneInput
                  files={file}
                  types={
                    "application/pdf, application/vnd.ms-excel, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint"
                  }
                  setFiles={setFile}
                  content={
                    <>
                      <div>
                        <Image
                          width={80}
                          height={80}
                          alt="Select file"
                          className={classes.image}
                          src="/static/images/undraw_add_file2_gvbb.svg"
                        />
                      </div>
                      <div>
                        <Box m={2}>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="textPrimary"
                          >
                            Selecciona tu curriculum
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            Selecciona tu archivo o{" "}
                            <Link underline="always">Busca</Link> uno en tu
                            computadora
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            style={{ fontSize: 9 }}
                          >
                            ( Archivos válidos pdf, xslm, word, pp )
                          </Typography>
                        </Box>
                      </div>
                    </>
                  }
                />
              </Box>

              <CardActions className={classes.flexEnd}>
                {/* <Button
                onClick={() => {
                  handleSubmit();
                }}
                color="primary"
                size="large"
                type="submit"
                variant="contained"
              >
                Guardar
              </Button> */}

                {error && <AlertP severity="error" msg={error.error} />}
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box mt={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={!file || loading || submit}
                  >
                    Aplicar
                  </Button>
                </Box>
              </CardActions>
            </form>
          </CardContent>
        )}
      </Formik>
    </Card>
  );
};

export default NoUserResumeUpload;

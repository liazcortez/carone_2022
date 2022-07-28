import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Button, Icon } from "@mui/material";
// import AuthContext from "../../context/auth/authContext";
import useAuth from '../../hooks/useAuth';
import { useRouter } from 'next/router';

const Facebook = ({ loading=false,register=true}) => {
  const {facebookLogin,user,loading:userLoading} = useAuth()
  const router = useRouter();
  const responseFacebook = (response) => {
    console.log(response)
    if(!response.id)return;
    router.push('/')
    facebookLogin(response);
  };
  return (
    <FacebookLogin
      appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
      callback={responseFacebook}
      isMobile={true}
      disableMobileRedirect={true}
      render={(renderProps) => (
        <Button
          variant="contained"
          size="large"
          startIcon={<Icon className="fa fa-facebook" />}
          fullWidth
          style={{ backgroundColor: "#4064ad", color: "white" }}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled || userLoading || (user && user._id)}
          onFailure={() => console.log('failed')}
        >
        {(!register)?'Iniciar Sesión con Facebook':'Registrarse con Facebook'}
        </Button>
      )}
    />
  );
};

export default Facebook;

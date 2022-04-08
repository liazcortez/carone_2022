import React from 'react';
import {
  makeStyles,
  Dialog
} from '@material-ui/core';
import useAuth from '../../hooks/useAuth';
import Login from './LoginNav'
import Register from './RegisterNav';

const useStyles = makeStyles(() => ({
  root: {}
}));

const DialogAuth = ({setOpen, open, className, ...rest }) => {

  const { success } = useAuth();
  const [type, setType] = React.useState('login')
  
  React.useEffect(()=>{
    if(success){
      setOpen(false);
    }
  },[success])
  
  return (
    <Dialog
      style={{zIndex: 5}}
      onClose={()=>setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      {
        type === 'login' ?
        <Login setType={setType}/> :
        <Register setType={setType}/>
      }
    </Dialog>
  );
};

export default DialogAuth;
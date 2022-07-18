import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FilesDropzone from '../DropzoneInput';
import useAuth from '../../hooks/useAuth';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography
} from '@mui/material';
import {makeStyles} from '@mui/styles';

const CapitalizeNames = (string) => {
    if(string === undefined || string === null) return '';
    string = string.replace(/-/, ' ')

    const words = string.split(" ");
    
    let finalString = '';

    words.map( (word, i) => {
        if(i !== 0 && i!==(words.length)){ finalString += ' ' }
        if(word.includes(".") || word.includes("/")){
            finalString += word.toUpperCase();
        }
        else{
            finalString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
        return false;
    })

    return finalString;

};


const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: "144px",
    width: "155px",
    cursor: 'pointer'
  },
  primaryColor: {
    color: theme.palette.primary.main
  }
}));

const ProfileDetails = ({ className, edit, ...rest}) => {
  const classes = useStyles();
  const [attachments, setAttachment] = useState(null);
  const { updateProfile, loading, user } = useAuth();

  const removePhoto = async() =>{
    await updateProfile({image: ''}, 'info')
  }
  
  useEffect(()=>{
    if(attachments){
      updateProfile(attachments[0], 'photo');
    }
    //eslint-disable-next-line
  },[attachments])
  return (
    <Box
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box>
        <Box
          display="flex"
        >
          <Box>
            {
              edit ? 
              <FilesDropzone 
                  setFiles={setAttachment}
                  types={'application/pdf, application/vnd.ms-excel, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint'}
                  isProfilePicture={true}
                  content={
                      <div>
                          <Avatar
                              className={classes.avatar}
                              src={user && user.image ? user.image :''}
                          />
                      </div>
                  }
              />
              :
              <Avatar
                  className={classes.avatar}
                  src={user && user.image ? user.image : '/app/account'}
              />
            }
          </Box>

          <Box sx={{display: "flex", alignItems: "center", paddingLeft: "2rem"}}>
            <Typography
              fontWeight={600}
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {user && CapitalizeNames(user.name)}
            </Typography>
          </Box>
            
          {/* <Typography
            color="textPrimary"
            variant="body1"
          >
            Tu rol:
            {' '}
              <span className={classes.primaryColor} variant="body2">
                {user && user.role
                  ? ' ' + CapitalizeNames(user.role)
                  : ''}
              </span>
          </Typography> */}
          
        </Box>

          <Box pt={"1rem"} width={"17%"}>
          {
            (edit && user && user.image !== '') ? (
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                onClick={removePhoto}
                color='primary'
              >
                Quitar Imagen
              </Button>
            </CardActions>
            ): null
          } 
          </Box>

      </Box>
    </Box>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ProfileDetails;

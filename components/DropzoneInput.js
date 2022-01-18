import React, {
    useCallback
  } from 'react';
  import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import {
    Box,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles,
    IconButton
} from '@material-ui/core';
import { X as DeleteIcon } from 'react-feather';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
  
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
  
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

const useStyles = makeStyles((theme) => ({
    root: {},
    dropZone: {
        border: `1px dashed ${theme.palette.divider}`,
        padding: theme.spacing(6),
        outline: 'none',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
          opacity: 0.5,
          cursor: 'pointer'
        }
      },
      dragActive: {
        backgroundColor: theme.palette.action.active,
        opacity: 0.5
      },
    image: {
      width: 130
    },
    info: {
      marginTop: theme.spacing(1)
    },
    list: {
      maxHeight: 320
    },
    actions: {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'flex-end',
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    },
    delete: {
        marginRight: '1em',
        width: 20,
        height: 20,
        backgroundColor: theme.palette.error.main,
        color: 'white',
        '&:hover': {
          backgroundColor: theme.palette.error.dark,
        }
      }
  }));
  
  const FilesDropzone = ({setFiles, isProfilePicture, files, content, multiple, types, className, ...rest }) => {
    const classes = useStyles();
  
    const handleDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles)
      //eslint-disable-next-line
    }, []);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: handleDrop,
        multiple: multiple,
        accept: types ? types : 'image/jpeg, image/png, application/pdf, application/vnd.ms-excel, application/msword, application/vnd.ms-powerpoint'
  
    });
  
    return (

      <div className={clsx(classes.root, className)} {...rest}>
        <div className={clsx({
          [classes.dropZone]: isProfilePicture ? false : true,
          [classes.dragActive]: isProfilePicture ? false : isDragActive
        })}
        {...getRootProps()}>
          <input {...getInputProps()} />
          {content}
        </div>

        {files && files.length > 0 && (
        <>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
              {files.map((file, i) => (
                <ListItem
                  divider={i < files.length - 1}
                  key={i}
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{display: 'inline-block'}}
                    primary={file && file.name}
                    primaryTypographyProps={{ variant: 'CAPTION' }}
                    secondary={bytesToSize(file.size)}
                  />
                  <IconButton
                    onClick={(e)=>{
                      setFiles(null);
                    }}
                    size="small"
                    className={classes.delete}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </PerfectScrollbar>
        </>
      )}
      </div>
    );
  };
  
  FilesDropzone.propTypes = {
    className: PropTypes.string
  };
  
  export default FilesDropzone;
  
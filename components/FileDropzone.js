import React, {
    useCallback
  } from 'react';
  import clsx from 'clsx';
  import { useDropzone } from 'react-dropzone';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/core';
  import imageCompression from 'browser-image-compression';
  
  const useStyles = makeStyles((theme) => ({
    root: {},
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
    }
  }));
  
  const FilesDropzone = ({customFunction = () => {}, content,compress=true, multiple, types, className, ...rest }) => {
    const classes = useStyles();
  
  
    const compressFile = async(files) => {
  
      let arrayFiles = []
      for(let i = 0; i < files.length; i++){
  
        if(!files[i].type.includes('image')) {
          arrayFiles.push(files[i])
          break;
        }
      
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1080,
          useWebWorker: true
        }
  
        try {
          let compressedFile = await imageCompression(files[i], options);
          arrayFiles.push(compressedFile)
        } catch (error) {
        }
      }
  
      return arrayFiles;
  
    }
  
    const handleDrop = useCallback(async (acceptedFiles) => {
      let files = acceptedFiles;
      if(compress) files = await compressFile(acceptedFiles);
      customFunction(files)
  
      //eslint-disable-next-line
    }, []);
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleDrop,
      accept: types ? types : 'image/jpeg, image/png, application/pdf'
  
    });
  
    return (
      <div className={clsx(classes.root, className)} {...rest}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {content}
        </div>
      </div>
    );
  };
  
  FilesDropzone.propTypes = {
    className: PropTypes.string
  };
  
  export default FilesDropzone;
  
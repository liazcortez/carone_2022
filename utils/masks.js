import React from 'react';
import Mask from 'react-number-format';

export const priceMask = (props) => {
	const { inputRef, onChange, ...other } = props;
	return (
	  <Mask 
        {...other}
	    getInputRef={inputRef}
	    onValueChange={(values) => {
	        onChange({ target: { name: props.name, value: values.value } });
	    }}
	    thousandSeparator
	    isNumericString
	    prefix='$ '
	  />
	);
}

export const percentageMask = (props) => {
	const { inputRef, onChange, ...other } = props;
	return (
	  <Mask 
        {...other}
	    getInputRef={inputRef}
	    onValueChange={(values) => {
	        onChange({ target: { name: props.name, value: values.value } });
	    }}
	    thousandSeparator
	    isNumericString
	    suffix=' %'
	  />
	);
}
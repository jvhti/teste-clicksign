import React from 'react';
import classes from './Backdrop.module.scss';

const backdrop = ({onClick}) => {
  return <div onClick={onClick} className={classes.Backdrop}/>;
};

export default backdrop;

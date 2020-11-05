import React from 'react';
import classes from "./Button.module.scss";

const button = ({children, className, onClick}) => {
  const allClassName = classes.Button + (className ? " " + className : '');

  return <button className={allClassName} onClick={onClick}>{children}</button>
};

export default button;

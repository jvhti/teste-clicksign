import React from 'react';
import classes from "./Button.module.scss";

const button = ({children, className}) => {
  const allClassName = classes.Button + (className ? " " + className : '');

  return <button className={allClassName}>{children}</button>
};

export default button;

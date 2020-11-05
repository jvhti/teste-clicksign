import React from 'react';
import classes from "./Button.module.scss";

const button = ({children, className, onClick, disabled = false}) => {
  const allClassName = classes.Button + (className ? " " + className : '');

  return <button disabled={disabled} className={allClassName} onClick={onClick}>{children}</button>
};

export default React.memo(button);

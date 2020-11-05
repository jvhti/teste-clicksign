import React from 'react';
import classes from './Input.module.scss';

const input = ({
                 type = "text", value = "", onChange = () => {
  }, placeholder = "", className
               }) => {
  const allClassName = classes.Input + (className ? " " + className : '');

  return <input type={type} className={allClassName} value={value} onChange={onChange} placeholder={placeholder}/>
};

export default input;

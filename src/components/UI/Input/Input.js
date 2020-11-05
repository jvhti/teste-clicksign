import React from 'react';
import classes from './Input.module.scss';

const input = ({
                 id, type = "text", value = "", onChange = () => {
  }, placeholder = "", className, maxWidth
               }) => {
  const allClassName = classes.Input + (className ? " " + className : '');

  return <input id={id} style={maxWidth ? {maxWidth} : undefined} type={type} className={allClassName} value={value}
                onChange={onChange} placeholder={placeholder}/>
};

export default React.memo(input);

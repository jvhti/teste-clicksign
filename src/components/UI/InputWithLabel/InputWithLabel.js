import React from 'react';
import classes from './InputWithLabel.module.scss';
import Input from "../Input/Input";

const inputWithLabel = ({label, maxWidth, type, value, onChange}) => {
  return (
      <label className={classes.InputWithLabel}>
        {label}
        <Input value={value} type={type} className={classes.InputWithLabel_Input} maxWidth={maxWidth}
               onChange={onChange}/>
      </label>
  );
};

export default React.memo(inputWithLabel);

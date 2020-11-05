import React from 'react';
import classes from './InputWithLabel.module.scss';
import Input from "../Input/Input";

const inputWithLabel = ({label, maxWidth, value, onChange}) => {
  return (
      <label className={classes.InputWithLabel}>
        {label}
        <Input value={value} className={classes.InputWithLabel_Input} maxWidth={maxWidth} onChange={onChange}/>
      </label>
  );
};

export default inputWithLabel;

import React from 'react';
import classes from './InputWithLabel.module.scss';
import Input from "../Input/Input";

const inputWithLabel = ({label, maxWidth}) => {
  return (
      <label className={classes.InputWithLabel}>
        {label}
        <Input className={classes.InputWithLabel_Input} maxWidth={maxWidth}/>
      </label>
  );
};

export default inputWithLabel;

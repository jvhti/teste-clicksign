import React from 'react';
import Button from "../../UI/Button/Button";
import classes from './NewContactButton.module.scss';
import plusIcon from '../../../resources/img/ic-plus.svg';

const newContactButton = () => {
  return <div className={classes.NewContactButtonContainer}>
    <Button className={classes.NewContactButton}>
      <img src={plusIcon} alt="" aria-hidden="true"/>
      Criar Contato
    </Button>
  </div>
};

export default newContactButton;

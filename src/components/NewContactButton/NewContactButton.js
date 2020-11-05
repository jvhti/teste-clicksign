import React from 'react';
import Button from "../UI/Button/Button";
import classes from './NewContactButton.module.scss';
import plusIcon from '../../resources/img/ic-plus.svg';

const newContactButton = ({className, show = true}) => {
  return <div className={classes.NewContactButtonContainer + (className ? ' ' + className : '')}
              style={!show ? {minWidth: 'auto'} : undefined}>
    {!show ||
    <Button className={classes.NewContactButton}>
      <img src={plusIcon} alt="" aria-hidden="true"/>
      Criar Contato
    </Button>
    }
  </div>
};

export default newContactButton;

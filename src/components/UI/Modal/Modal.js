import React from 'react';
import classes from './Modal.module.scss';
import Button from "../Button/Button";

const modal = ({children, title, confirmLabel = "Salvar", cancelAction, confirmAction, confirmEnable = true}) => {
  return (
      <div className={classes.Modal}>
        <div className={classes.Modal_header}>
          <h5>{title}</h5>
        </div>
        <div className={classes.Modal_body}>
          {children}
        </div>
        <div className={classes.Modal_footer}>
          <Button className={classes.CancelButton} onClick={cancelAction}>Cancelar</Button>
          <Button disabled={!confirmEnable} onClick={confirmEnable ? confirmAction : undefined}>{confirmLabel}</Button>
        </div>
      </div>
  );
};

export default modal;

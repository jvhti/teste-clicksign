import React from 'react';
import classes from './Modal.module.scss';
import Button from "../Button/Button";

const modal = ({children, confirmLabel = "Salvar"}) => {
  return (
      <div className={classes.Modal}>
        <div className={classes.Modal_header}>
          <h5>Editar Contato</h5>
        </div>
        <div className={classes.Modal_body}>
          {children}
        </div>
        <div className={classes.Modal_footer}>
          <Button className={classes.CancelButton}>Cancelar</Button>
          <Button>{confirmLabel}</Button>
        </div>
      </div>
  );
};

export default modal;

import React from 'react';
import NewContactButton from "../NewContactButton/NewContactButton";
import classes from './EmptyPage.module.scss';
import bookIcon from '../../resources/img/ic-book.svg';

const emptyPage = () => {
  return (
      <div className={classes.EmptyPage}>
        <img src={bookIcon} alt="" aria-hidden="true"/>
        <p>Nenhum contato foi criado ainda.</p>
        <NewContactButton className={classes.NewContactButton}/>
      </div>
  );
};

export default emptyPage;

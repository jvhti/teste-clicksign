import React from 'react';
import Logo from "./Logo/Logo";
import classes from './TopBar.module.scss';
import SearchBar from "./SearchBar/SearchBar";
import NewContactButton from "../NewContactButton/NewContactButton";

const topBar = ({showCreateContact, openNewContactModal}) => {
  return (
      <header className={classes.TopBar}>
        <Logo/>
        <NewContactButton show={!!showCreateContact} onClick={openNewContactModal}/>
        <SearchBar/>
      </header>
  );
};

export default React.memo(topBar);

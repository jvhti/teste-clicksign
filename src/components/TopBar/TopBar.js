import React from 'react';
import Logo from "./Logo/Logo";
import classes from './TopBar.module.scss';
import SearchBar from "./SearchBar/SearchBar";
import NewContactButton from "../NewContactButton/NewContactButton";

const topBar = ({showCreateContact}) => {
  return (
      <header className={classes.TopBar}>
        <Logo/>
        <NewContactButton show={!!showCreateContact}/>
        <SearchBar/>
      </header>
  );
};

export default topBar;

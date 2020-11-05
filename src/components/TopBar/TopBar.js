import React from 'react';
import Logo from "./Logo/Logo";
import classes from './TopBar.module.scss';
import SearchBar from "./SearchBar/SearchBar";
import NewContactButton from "../NewContactButton/NewContactButton";

const topBar = () => {
  return (
      <header className={classes.TopBar}>
        <Logo/>
        <NewContactButton/>
        <SearchBar/>
      </header>
  );
};

export default topBar;

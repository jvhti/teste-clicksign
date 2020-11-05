import React from 'react';
import Logo from "./Logo/Logo";
import classes from './TopBar.module.scss';
import SearchBar from "./SearchBar/SearchBar";
import NewContactButton from "../NewContactButton/NewContactButton";

const topBar = ({showCreateContact, openNewContactModal, searchTerm, setSearchTerm}) => {
  return (
      <header className={classes.TopBar}>
        <Logo/>
        <NewContactButton show={!!showCreateContact} onClick={openNewContactModal}/>
        <SearchBar value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)}/>
      </header>
  );
};

export default React.memo(topBar);

import React from 'react';
import Input from "../../UI/Input/Input";
import classes from './SearchBar.module.scss';

const searchBar = () => {
  return (
      <div className={classes.SearchBarContainer}>
        <Input placeholder="Buscar..." className={classes.SearchBar}/>
        <button className={classes.SearchButton}><span className="sr-only">Pesquisar</span></button>
      </div>
  );
};

export default searchBar;

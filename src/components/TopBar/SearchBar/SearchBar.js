import React from 'react';
import Input from "../../UI/Input/Input";
import classes from './SearchBar.module.scss';

const SearchBar = ({value, onChange}) => {
  return (
      <div className={classes.SearchBarContainer}>
        <label htmlFor="search" className="sr-only">Pesquisar</label>
        <Input id="search" placeholder="Buscar..." className={classes.SearchBar} value={value} onChange={onChange}
               type="search"/>
        <button className={classes.SearchButton}><span className="sr-only">Pesquisar</span></button>
      </div>
  );
};

export default React.memo(SearchBar);

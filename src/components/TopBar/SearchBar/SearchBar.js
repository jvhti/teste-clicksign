import React from 'react';
import Input from "../../UI/Input/Input";
import classes from './SearchBar.module.scss';

const searchBar = ({value, onChange}) => {
  return (
      <div className={classes.SearchBarContainer}>
        <Input placeholder="Buscar..." className={classes.SearchBar} value={value} onChange={onChange}/>
        <button className={classes.SearchButton}><span className="sr-only">Pesquisar</span></button>
      </div>
  );
};

export default React.memo(searchBar);

import React, {useRef} from 'react';
import Input from "../../UI/Input/Input";
import classes from './SearchBar.module.scss';

const SearchBar = ({value, onChange}) => {
  const inputRef = useRef(null);

  return (
      <div className={classes.SearchBarContainer}>
        <label htmlFor={inputRef.current} className="sr-only">Pesquisar</label>
        <Input ref={inputRef} placeholder="Buscar..." className={classes.SearchBar} value={value} onChange={onChange}/>
        <button className={classes.SearchButton}><span className="sr-only">Pesquisar</span></button>
      </div>
  );
};

export default React.memo(SearchBar);

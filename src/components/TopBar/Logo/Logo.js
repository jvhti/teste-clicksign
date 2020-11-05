import React from 'react';
import LogoSVG from '../../../resources/img/ic-logo.svg';
import classes from './Logo.module.scss';

const logo = () => {
  return (
      <h1 className={classes.Logo}>
        <a href="/">
          <img width={147} height={32} src={LogoSVG} alt="Ubook"/>
        </a>
      </h1>
  );
};

export default React.memo(logo);

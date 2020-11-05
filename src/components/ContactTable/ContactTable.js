import React from 'react';
import classes from './ContactTable.module.scss';
import ContactItem from "./ContactItem";

const contactTable = () => {
  return (
      <table className={classes.ContactTable}>
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Contatos</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th><span className="sr-only">Opções</span></th>
        </tr>
        </thead>
        <tbody>
        <ContactItem name="Alana" email="alana@email.com" number="(11) 12345-6789"/>
        <ContactItem name="Henrique" email="alana@email.com" number="(11) 12345-6789"/>
        </tbody>
      </table>
  );
};

export default contactTable;

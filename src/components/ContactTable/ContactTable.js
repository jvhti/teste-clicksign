import React, {useCallback} from 'react';
import classes from './ContactTable.module.scss';
import ContactItem from "./ContactItem";

const ContactTable = ({contactList, setActiveModal, setContactId}) => {

  const deleteAction = useCallback((i) => {
    return () => {
      setActiveModal('confirmDeletion');
      setContactId(i);
    };
  }, [setActiveModal, setContactId]);

  const editAction = useCallback((i) => {
    return () => {
      setActiveModal('editContact');
      setContactId(i);
    };
  }, [setActiveModal, setContactId]);

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
        {contactList.map((contact, i) => <ContactItem key={i} name={contact.name} email={contact.email}
                                                      number={contact.cellphone} deleteAction={deleteAction(i)}
                                                      editAction={editAction(i)}/>)}
        </tbody>
      </table>
  );
};

export default React.memo(ContactTable);

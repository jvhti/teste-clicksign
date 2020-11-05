import React, {useCallback} from 'react';
import classes from './ContactTable.module.scss';
import ContactItem from "./ContactItem";
import useForceUpdate from "../../hooks/forceUpdateHook";

let indexHighlighted = [];

function isHighlighted(id, forceUpdate) {
  if (indexHighlighted.find(x => x === id)) return true;
  if (window.lastSaved !== id || !window.timestamp) return false;

  let t = new Date(window.timestamp);
  t.setSeconds(t.getSeconds() + 10);

  if (t > new Date()) {
    setTimeout(() => {
      indexHighlighted = indexHighlighted.filter((ind) => ind !== id);
      forceUpdate();
    }, (t.getTime() - new Date().getTime()) + 5);

    indexHighlighted.push(id);
    return true;
  }
  return false;
}

const ContactTable = ({contactList, setActiveModal, setContactId}) => {
  const forceUpdate = useForceUpdate();

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
                                                      number={contact.cellphone} deleteAction={deleteAction(contact.id)}
                                                      editAction={editAction(contact.id)}
                                                      isHighlighted={isHighlighted(contact.id, forceUpdate)}/>)}
        </tbody>
      </table>
  );
};

export default React.memo(ContactTable);

import React, {useCallback} from 'react';
import classes from './ContactTable.module.scss';
import ContactItem from "./ContactItem";
import useForceUpdate from "../../hooks/forceUpdateHook";

let indexHighlighted = [];

function isHighlighted(i, forceUpdate) {
  if (indexHighlighted.find(x => x === i)) return true;
  if (window.lastSaved !== i || !window.timestamp) return false;

  let t = new Date(window.timestamp);
  t.setSeconds(t.getSeconds() + 10);

  if (t > new Date()) {
    setTimeout(() => {
      indexHighlighted = indexHighlighted.filter((ind) => ind !== i);
      forceUpdate();
    }, (t.getTime() - new Date().getTime()) + 5);

    indexHighlighted.push(i);
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
                                                      number={contact.cellphone} deleteAction={deleteAction(i)}
                                                      editAction={editAction(i)}
                                                      isHighlighted={isHighlighted(i, forceUpdate)}/>)}
        </tbody>
      </table>
  );
};

export default React.memo(ContactTable);

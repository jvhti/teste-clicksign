import React, {useCallback} from 'react';
import Modal from "../UI/Modal/Modal";
import {deleteContact} from '../../service/newContact';

const ContactModal = ({cancelAction, contactId}) => {
  const confirmAction = useCallback(() => {
    deleteContact(contactId);
    cancelAction();
  }, [contactId, cancelAction]);

  return (
      <Modal title="Excluir contato" confirmLabel="Excluir" cancelAction={cancelAction} confirmAction={confirmAction}>
        <p>Deseja realmente excluir o contato?</p>
        <br/>
      </Modal>
  );
};

export default ContactModal;

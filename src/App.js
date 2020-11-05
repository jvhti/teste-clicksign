import React, {useEffect, useState} from "react";
import TopBar from "./components/TopBar/TopBar";
import EmptyPage from "./components/EmptyPage/EmptyPage";
import ModalManager from "./components/Modals/ModalManager";
import {getContactsList} from './service/newContact';
import ContactTable from "./components/ContactTable/ContactTable";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const contactListTmp = getContactsList();
    if (contactListTmp.length !== contactList.length)
      setContactList(getContactsList());
  }, [setContactList, contactList.length]);

  const openNewContactModal = () => setActiveModal('newContact');

  return (
      <React.Fragment>
        <TopBar showCreateContact={contactList.length} openNewContactModal={openNewContactModal}/>

        <ModalManager activeModal={activeModal} closeModal={() => setActiveModal(null)}/>

        {contactList.length ? <ContactTable contactList={contactList}/> :
            <EmptyPage openNewContactModal={openNewContactModal}/>}
      </React.Fragment>
  );
}

export default App;

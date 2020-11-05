import React, {useEffect, useState} from "react";
import TopBar from "./components/TopBar/TopBar";
import EmptyPage from "./components/EmptyPage/EmptyPage";
import ModalManager from "./components/Modals/ModalManager";
import {getContactsList, setCallback} from './service/newContact';
import ContactTable from "./components/ContactTable/ContactTable";

let debounce = null;

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [contactId, setContactId] = useState(null);
  const [contactList, setContactList] = useState([]);
  const [filteredContactList, setFilteredContactList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setContactList(getContactsList());
    setCallback(setContactList);
  }, []);

  useEffect(() => {
    if (!searchTerm)
      return setFilteredContactList(contactList);

    if (debounce)
      clearTimeout(debounce);

    debounce = setTimeout(() => {
      setFilteredContactList(contactList.filter(contact => contact.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())));
      debounce = null;
    }, 500);
  }, [searchTerm, contactList, setFilteredContactList]);

  const openNewContactModal = () => setActiveModal('newContact');

  return (
      <React.Fragment>
        <TopBar showCreateContact={contactList.length} openNewContactModal={openNewContactModal}
                setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>

        <ModalManager activeModal={activeModal} closeModal={() => setActiveModal(null)} contactId={contactId}/>

        {contactList.length ?
            <ContactTable contactList={filteredContactList} setActiveModal={setActiveModal}
                          setContactId={setContactId}/> :
            <EmptyPage openNewContactModal={openNewContactModal}/>}
      </React.Fragment>
  );
}

export default App;

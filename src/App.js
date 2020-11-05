import React, {useState} from "react";
import TopBar from "./components/TopBar/TopBar";
import EmptyPage from "./components/EmptyPage/EmptyPage";
import ModalManager from "./components/Modals/ModalManager";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
      <React.Fragment>
        <TopBar/>

        <ModalManager activeModal={activeModal} closeModal={() => setActiveModal(null)}/>
        <EmptyPage openNewContactModal={() => setActiveModal('newContact')}/>
        {/*<ContactTable/>*/}
      </React.Fragment>
  );
}

export default App;

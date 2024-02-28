import './App.css';
import { useState } from 'react';
import Popup from './components/ui/Popup/Popup';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  const [modalActive,setModalActive] = useState(false);
  return (
    <div className="App">
      <Header active={modalActive} setActive={setModalActive} />
      <Main active={modalActive} setActive={setModalActive} />
      <Footer />
      <Popup active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;

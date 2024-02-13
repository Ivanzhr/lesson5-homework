import './App.css'
import Items from './Items'
import Modal from './Modal'
import { useState } from 'react';
import allpic from './Allpic';

function App() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <Items pic = {allpic} setModal = {setModal}/>
      <Modal pic = {allpic} modal = {modal} setModal = {setModal}/>
    </>
    );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav1 from './Nav1';
import Footer1 from './Footer1';
import Table from './Table';
import ColorChanger from './ColorChanger';
import GreetingApp from './GreetingApp';
import ToggleText from './ToggleText';
import CountWithStep from './CountWithStep';

function App() {
  return (
    <>
    <CountWithStep/>
  <ColorChanger/>
  <GreetingApp/>
  <ToggleText/>
      <Nav1 />
     <Table/>
     <Footer1 />
    </>
  );
}

export default App;

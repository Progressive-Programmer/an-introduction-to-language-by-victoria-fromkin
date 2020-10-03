import React from 'react';
import './App.css';
import Header from './Header';
import Chapters from './Chapters';
import Footer from './Footer';
import Text from './Text';

function App() {
  return (
    <div className="app">

      <Header />
      <Chapters />
      <Text />
      <Footer />

    </div>
  );
}

export default App;

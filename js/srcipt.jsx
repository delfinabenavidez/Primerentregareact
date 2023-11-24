// js/script.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './src/components/Navbar';
import ItemListContainer from './src/components/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('navbarContainer'));

import React from 'react';
import Card from './component/Card';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className=" mt-4">HBD Apni</h1>
        <small>Tekan kartu untuk membuka...</small>
      </div>
      <Card />
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import Header from "./ui/components/Header/Header";
import AppRouter from "./ui/components/AppRouter/AppRouter";


function App() {
  return (
    <div className="App">
      <Header />
        <div className='content-page'>
          <AppRouter />
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import Main from './component/Main';
import { Route, Routes } from 'react-router-dom';
import Details from './component/Details';
import { AppContext } from './component/Main'; // Import the context

const App = () => {
  return (
    // Provide the context to the entire app
    <AppContext.Provider value={{}}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;

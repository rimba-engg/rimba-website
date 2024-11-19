import { HashRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import './App.css';

const  Home  = lazy(()=> import('./components/HomePage/HomePage'));
const  HowIt  = lazy(()=> import('./components/RimbaComponents/HowIt'));


function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/how-it-works" element={<HowIt />}> </Route>
          <Route path="/dummy-route" element={<Home />}> </Route>

        </Routes>

      </Suspense>

    </HashRouter>
  );
}

export default App;
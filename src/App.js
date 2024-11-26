import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import './App.css';
const  Home  = lazy(()=> import('./components/HomePage/HomePage'));
const  HowIt  = lazy(()=> import('./components/RimbaComponents/HowIt'));
const  CaseStudies  = lazy(()=> import('./components/caseStudies/CaseStudiesFrame'));
const  AboutUs  = lazy(()=> import('./components/aboutUs/AboutUs'));
const  CaseStudyDetail  = lazy(()=> import('./components/caseStudies/CaseStudyDetail'));




function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/how-it-works" element={<HowIt />}></Route>
          <Route path="/case-studies" element={<CaseStudies />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/case-studies/:id" element={<CaseStudyDetail />}></Route>



        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}

export default App;
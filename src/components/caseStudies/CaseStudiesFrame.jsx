import React from "react";
import Header from "../HomePage/Header";
import CaseStudies from "./CaseStudies";
import GetStarted from "../HomePage/GetStarted";
import Footer from "../HomePage/Footer";
import ContactUs from "../HomePage/ContactUs";
import FAQ from "../HomePage/FAQ";
function CaseStudiesFrame(){
    return(
    <div className="flex overflow-hidden flex-col items-center bg-white">
        
        <Header></Header>
        <CaseStudies></CaseStudies>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
        <GetStarted></GetStarted>
        <Footer></Footer>
        </div>
    )
}

export default CaseStudiesFrame
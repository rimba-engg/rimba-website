import React from "react";
import Header from "../common/Header";
import CaseStudies from "./CaseStudies";
import GetStarted from "../common/GetStarted";
import Footer from "../common/Footer";
import ContactUs from "../common/ContactUs";
import FAQ from "../common/FAQ";
import { CaseStudyPage } from "./CaseStudyPage";
function CaseStudiesFrame(){
    return(
    <div className="flex overflow-hidden flex-col items-center bg-white">
        
        <Header></Header>
        {/* <CaseStudyPage></CaseStudyPage> */}
        <CaseStudies></CaseStudies>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
        <GetStarted></GetStarted>
        <Footer></Footer>
        </div>
    )
}

export default CaseStudiesFrame
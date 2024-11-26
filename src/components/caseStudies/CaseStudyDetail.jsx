
import React, { useState, useEffect } from 'react';
import Header from "../common/Header";
import { useParams } from 'react-router-dom';
import { CaseStudyCard } from "./CaseStudyCard";
import Footer from '../common/Footer';
import GetStarted from '../common/GetStarted';
const caseStudies = [
  {
    id:1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a88861822e83dccdb999843aa990405094498b9a1df7019c4fc78c9f8e494e84?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Streamlining Compliance for an RNG Project",
    description:
      "Renewable Natural Gas (RNG) is a key player in reducing carbon emissions, offering a low-carbon fuel alternative...",
  },
  {
    id:2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f247da39c22b870ad8fd224f5d2e6d9712f321e843cbb4c5dae56013c3789eb7?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Streamlining Feedstock Traceability for Biofuel Traders",
    description:
      "Feedstock traders play a crucial role in the biofuels industry by ensuring a steady supply of raw materials to biofu...",
  },
  {
    id:3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/54529823d15e79091fb89da40f1a3854c00aac90ca04a267c46c6bf6e1576c53?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Transforming UCO Traceability with Rimba",
    description:
      "Used Cooking Oil (UCO) has become an invaluable resource for biofuel production due to its numerous advan...",
  },
];
const CaseStudies = [
  {
    id:1,
    bread:"Streamlining Compliance for an RNG Project",
    image1:"case_study_1_1.png",
    image2:"case_study_1_2.png",
    image3:"case_study_1_3.png",
    background:"Renewable Natural Gas (RNG) is a key player in reducing carbon emissions, offering a low-carbon fuel alternative. In the U.S., RNG can be derived from livestock manure, landfills, food waste, and wastewater. By 2019, the U.S. consumed 261 billion cubic feet (BCF) of RNG, with projections indicating a potential to produce up to 2,200 BCF annually through anaerobic digestion—equivalent to about 11% of the nation’s daily natural gas consumption.There are thousands of RNG projects across the U.S., primarily supplying independent power producers, electric utilities, and commercial industries. However, the success of these projects hinges not only on production but also on compliance with regulatory standards to access carbon credit markets, which drive ~75% of their revenue.",
    Challenge:{
      intro:"To sell RNG as a low-carbon fuel, companies must comply with various regulatory and certification standards (LCFS, RFS, ISCC). Compliance requires detailed operational reports to demonstrate adherence to these standards.",
      points:[
        {
          head:"Data Complexity :",
          detail:"RNG facilities generate massive amounts of data, including unstructured documents (e.g., electricity invoices, bills of lading) and real-time instrument readings (e.g., flow meters, chromatographs). Each facility produces over 300,000 data points daily, requiring this data to be processed into standardized reports."
        },
        {
          head:"Manual Reporting: ",
          detail:"Many companies rely on consultants and analysts to manually compile reports using Excel and pre-defined templates. These reports are submitted monthly, quarterly, and annually, often requiring third-party audits. The process is labor-intensive, error-prone, and expensive."
        }
      ]
    },
    Solution:{
      intro:"Rimba transforms the compliance process by automating data capture, transformation, and reporting:",
      points:[
        {
          head:"Data Integration: ",
          detail:"Rimba extracts and synthesizes data from multiple sources, including unstructured documents and instruments like flow meters and chromatographs."
        },
        {
          head:"Automated Reporting: ",
          detail:"The platform automatically converts operational data into the required formats for LCFS, RFS, and ISCC compliance standards."
        },
        {
          head:"Workflow Optimization: ",
          detail:"By automating compliance reporting workflows, Rimba eliminates the need for manual data entry and reduces reliance on costly consultants and analysts."
        }
      ]
    },
    Results:{
      intro:"With Rimba, RNG companies achieve:",
      post:"Rimba empowers feedstock traders to navigate the complexities of the biofuels industry with ease, providing a centralized platform for managing sustainability compliance and enhancing supply chain transparency.",
      points:[
        {
          head:"Time Savings: ",
          detail:"Automated data processing and reporting significantly reduce the time spent on compliance tasks."
        },
        {
          head:"Cost Efficiency: ",
          detail:"Companies save on labor and consulting costs, reallocating resources to core business operations."
        },
        {
          head:"Error Reduction: ",
          detail:"Automation minimizes human errors, ensuring accurate and audit-ready compliance reports."
        },
        {
          head:"Revenue Optimization: ",
          detail:"Streamlined compliance enables faster credit generation, maximizing revenue potential."
        },
      ]
    }
  }
]
export default function CaseStudyDetail() {
  const { id } = useParams();
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    const temp = async () => {
      let fu = CaseStudies.filter(obj => obj.id == id)
      setCurrent(fu[0])
    }
    temp()
    console.log("here----")
    console.log(id)
  }, [id])

  if (!current) {
    return (
      <div> LOADING ... </div>
    )
  }
  else{
    return (
      <main className="flex overflow-hidden flex-col bg-white">
        <Header></Header>
  
        {/* Main content section */}
        <section className="flex flex-col items-start self-center mt-10 w-full max-w-[1180px] max-md:max-w-full">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="flex gap-2.5 text-sm leading-none text-slate-950">
            <a href="/">Home</a>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48fb4e81b9b003e5797c7a90dda0d46d0451a1b2318468fa6001c5250a48c796?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[0.56] w-[5px]"
            />
            <a href="/case-studies">Case Studies</a>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48fb4e81b9b003e5797c7a90dda0d46d0451a1b2318468fa6001c5250a48c796?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[0.56] w-[5px]"
            />
            <span className="font-medium text-teal-700">
              {current.bread}
            </span>
          </nav>
          <div className=" w-[727px] text-[#040a27] text-5xl font-semibold my-8 leading-[60px]">{current.bread}</div>
          {/* Rest of the content remains the same until the case studies section */}
          <div className='flex'>
            <div>
            <img src={require(`../../img/${current.image1}`)} alt={current.bread} />

            </div>
            <div className='ml-4'>
            <img className='mb-4' src={require(`../../img/${current.image2}`)} alt={current.bread} />
            <img src={require(`../../img/${current.image3}`)} alt={current.bread} />

            </div>

          </div>

          <section className='mt-4 text-slate-600'>
            <div className='case-study-text-container'>
              <h2 className="text-3xl font-semibold text-slate-950">
              Background
              </h2>
              <br></br>
              <span  >{current.background}</span>
            </div>
            <div  className='case-study-text-container'>
              <h2 className="text-3xl font-semibold text-slate-950">
                Challenge
                </h2>
                <br></br>
              <span>{current.Challenge.intro}</span>
              {current.Challenge.points &&
              current.Challenge.points.map(el=>{
                return(
                  
                  <li> <span className='font-semibold text-slate-900' > {el.head} 
                    </span>  {el.detail}</li>

                  
                )
              })}
            </div>

            <div  className='case-study-text-container'>
              <h2 className="text-3xl font-semibold text-slate-950">
              Solution
                </h2>
                <br></br>
              <span>{current.Solution.intro}</span>
              {current.Solution.points &&
              current.Solution.points.map(el=>{
                return(
                  <li> <span className='font-semibold text-slate-900' > {el.head} 
                    </span>  {el.detail}</li>
                )
              })}
            </div>

            <div className='case-study-text-container'>
              <h2 className="text-3xl font-semibold text-slate-950">
              Results
                </h2>
                <br></br>
              <span>{current.Results.intro}</span>
              {current.Results.points &&
              current.Results.points.map(el=>{
                return(
                  <li> <span className='font-semibold text-slate-900' > {el.head} 
                    </span>  {el.detail}</li>
                )
              })}
              <br></br>
              <span>{current.Results.post}</span>
            </div>

          </section>
          
          <section className="w-full">
          <h2 className="self-center mt-44 text-3xl font-semibold text-center text-slate-950 max-md:mt-10">
            Other Case Studies
          </h2>
          <p className="self-center mt-5 text-lg leading-none text-center text-slate-950 text-opacity-80">
            How we could help you
          </p>

          <div className="self-end mt-16 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          </div>
        </section>
        </section>
        <GetStarted></GetStarted>
        <Footer></Footer>
        
      </main>
    );

  }
}
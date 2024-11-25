/**
 * This code was generated by Builder.io
 */
import React, { useState } from "react";
const faqData = [
  {
    question: "What is Rimba?",
    answer:
      "Rimba is a platform that simplifies sustainability compliance for bioenergy projects.",
  },
  {
    question: "Who can benefit from using Rimba?",
    answer:
      "Suppliers, producers, and off-takers in the bioenergy industry can benefit from Rimba.",
  },
  {
    question: "What types of data does Rimba process?",
    answer:
      "Rimba processes various types of data including bills of lading, electricity bills, flow meter readings, and chromatograph data.",
  },
  {
    question: "Which regulatory standards does Rimba support?",
    answer: "Rimba supports standards such as LCFS, RFS, and ISCC.",
  },
  {
    question: "How does Rimba help with audits?",
    answer:
      "Rimba simplifies audit preparation by providing verified supply chain data and automating reporting processes.",
  },
];

function FAQItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between px-8 py-7 mt-6 w-full text-base font-medium rounded-3xl bg-white bg-opacity-40 max-w-[1180px] text-slate-950 max-md:px-5 max-md:max-w-full
    border-[#007D701F] border-solid border-2 w-full
    ">
      <div>{question}</div>
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09fbe09aff55735c3b1798b40356aca1f563594a3f292574c71ece89d3a74a1c?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
          className={`object-contain shrink-0 my-auto aspect-[0.61] w-[11px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          alt={isOpen ? "Collapse" : "Expand"}
        />
      </button>
      {isOpen && (
        <div id={`faq-answer-${question}`} className="w-full mt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-24 max-w-[1180px] max-md:mt-10 max-md:max-w-full w-full">
      <h2 className="text-3xl font-semibold text-center text-slate-950">
        Frequently Asked Questions (FAQ)
      </h2>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          toggleOpen={() => toggleFAQ(index)}
        />
      ))}
      <div className="flex gap-3 mt-8 max-w-full text-base font-medium text-teal-700 w-[150px] w-full justify-center">
        <div className="">View More FAQs</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7e752addf5fb093d4463d69d5bacc21e3958ff5cb378ba3dbcf141c4c078695?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
          className="object-contain shrink-0 my-auto aspect-[1.21] w-[17px]"
          alt="View more arrow"
        />
      </div>
    </section>
  );
}

export default FAQ;

import React, { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import HeroSection from "./HeroSection";
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  // const handleFinalSubmit = (data) => {
  //   // Combine previous form data with current step data
  //   const finalFormData = { ...formData, ...data };
  //   // Handle final form submission here
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbx5idsHa535ueqYF67xknUTKfoqkXIIh306KCN-wuLRQrLm8iMJTsxc_piyPZhV89is/exec",
  //     {
  //       method: "POST",
  //       body: finalFormData
  //     }
  //   )
  //   console.log("Form submitted successfully!", finalFormData);
  //   // Reset form data and step
  //   setFormData({});
  //   // navigate('/urgency');
  //   // window.location.href = 'http://localhost:3000/urgency';
  //   setStep(1);
  // };
  const handleFinalSubmit = (data) => {
    // Combine previous form data with current step data
    const finalFormData = new FormData();
    for (let key in formData) {
      finalFormData.append(key, formData[key]);
    }
    for (let key in data) {
      finalFormData.append(key, data[key]);
    }
  
    // Handle final form submission here
    fetch(
      "https://script.google.com/macros/s/AKfycbx5idsHa535ueqYF67xknUTKfoqkXIIh306KCN-wuLRQrLm8iMJTsxc_piyPZhV89is/exec",
      {
        method: "POST",
        body: finalFormData
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log("Form submitted successfully!", data);
        // Reset form data and step
        setFormData({});
        setStep(1);
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });
     
      navigate('/book-call');
  };
  
  return (
    <div className="bg-slate-100 ">
      <div className="flex py-32 m-auto flex-col md:flex-row">
        <HeroSection />
        <div className=" px-8 pt-1 md:pt-0">
          {step === 1 && <Step1Form onNext={handleNext} />}
          {step === 2 && (
            <Step2Form
              formData={formData}
              onBack={() => setStep(step - 1)}
              onSubmit={handleFinalSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

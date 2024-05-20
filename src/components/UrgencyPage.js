import React, { useEffect, useRef, useState } from "react";
import WistiaVideo from "./WistiaVideo";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmbeddedButtonContainer from "./EmbeddedButtonContainer";
export default function UrgencyPage() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate.go(1); // Go forward one step, effectively staying on the current page
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  useEffect(() => {
    const maleNames = ['John', 'David', 'Michael', 'James', 'William', 'Daniel', 'Thomas', 'Joseph', 'Charles', 'Christopher'];
    const femaleNames = ['Mary', 'Jennifer', 'Linda', 'Patricia', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy'];
    const names = [...maleNames, ...femaleNames];
  
    const getRandomName = () => {
      const randomIndex = Math.floor(Math.random() * names.length);
      return names[randomIndex];
    };
  
    const getRandomTime = () => {
      const minutesAgo = Math.floor(Math.random() * 60);
      return minutesAgo;
    };
  
    const getRandomTimeToShow = () => {
      const randomInterval = Math.floor(Math.random() * 45) + 5; // Random time between 5 and 45 seconds
      return randomInterval * 1000; // Convert seconds to milliseconds
    };
  
    const displayFirstToast = () => {
      const name = getRandomName();
      const minutesAgo = getRandomTime();
      const message = `${name} booked call ${minutesAgo} minutes ago`;
      toast(message, {
        position: "top-left",
        className: "bg-yellow-500 text-white p-4 rounded shadow-lg",
      });
    };
  
    // Display first toast after 5 seconds
    setTimeout(displayFirstToast, 5000);
  
    // Set interval for subsequent toasts
    const interval = setInterval(() => {
      const name = getRandomName();
      const minutesAgo = getRandomTime();
      const message = `${name} booked call ${minutesAgo} minutes ago`;
      toast(message, {
        position: "top-left",
        className: "bg-yellow-500 text-white p-4 rounded shadow-lg",
      });
    }, getRandomTimeToShow());
  
    return () => clearInterval(interval);
  }, []);
  



  return (
    <div className="flex justify-center items-center h-screen ">
      
      <div className="p-6 md :p-12 rounded-lg shadow-lg bg-slate-100 max-w-screen-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
              STOP! You'll Never See This Page Again!
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-6 font-bold">
              Secure Your Free Website Spot Now! <br/> <span className="bg-green-500" >100% Guaranteed</span> - Start Your Project Immediately After a Call.
            </p>
            <div className="relative">
            <WistiaVideo videoId="do31w28w69" />
            <EmbeddedButtonContainer />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 md:mt-0 mt-8">
            <a  href="https://vpdigital.dev/thankyou"  className="block text-center text-gray-500 cursor-pointer hover:font-bold mt-44">
              I Don't Want To Take Advantage of This Amazing Offer, Take Me to Confirm My Submission.
            </a>
          
          </div>
        </div>
      </div>
      <div ref={containerRef}></div>

        <div>
        <div>
      <ToastContainer />
    </div>

    </div>
    </div>
  );
}

import { BsWhatsapp } from "react-icons/bs"; 
import { AiOutlineMail } from "react-icons/ai"; 
import React from 'react';
import Logo from "../assets/vp digital_transparent.png";

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@yourdomain.com";
  };
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="footer-links flex flex-col">
          <a href="https://vpdigital.dev/privacy-policy" className="text-white ml-4 mb-2">Privacy Policy</a>
          <a href="https://vpdigital.dev/terms-and-conditions" className="text-white ml-4">Terms and Conditions</a>
        </div>
        <div className="support-info">
          <p className='mb-2 flex mr-2'><AiOutlineMail className="mr-2 mt-1"/><a href="#" onClick={handleEmailClick} >freewebsite@vpdigital.dev</a></p>
          <p className="flex"><BsWhatsapp className="mr-2 mt-1" /><a href="https://wa.me/message/4NDXQYJ7RKEPC1" >+447822014101</a></p>
        </div>
      </div>
    </footer>
  );
}

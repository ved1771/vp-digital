
import { BsWhatsapp } from "react-icons/bs"; 
import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-4">Your submission has been received. We will connect with you as soon as possible.</p>
        <p className="text-gray-600 mb-6">We suggest pinning a message on WhatsApp so our team can respond faster.</p>
      <a href="https://wa.me/message/4NDXQYJ7RKEPC1">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <BsWhatsapp  size={25}/>
        </button>
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;

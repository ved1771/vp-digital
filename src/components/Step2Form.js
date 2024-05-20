// Step2Form.js
import React, { useState } from "react";

const Step2Form = ({ formData, onSubmit, onBack }) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    Business: "",
    Need: "",
  });
  const [errors, setErrors] = useState({
    Business: false,
    Need: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalInfo({ ...additionalInfo, [name]: value });
    // Reset error if the user is typing again
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any field is empty
    if (additionalInfo.Business.trim() === "" || additionalInfo.Need.trim() === "") {
      // Set errors for empty fields
      setErrors({
        Business: additionalInfo.Business.trim() === "",
        Need: additionalInfo.Need.trim() === "",
      });
    } else {
      onSubmit(additionalInfo);
    }
  };

  return (
    <form
  className="bg-white p-4 rounded-xl border-2 px-8 py-7 shadow-md"
  onSubmit={handleSubmit}
>
  <div className="font-bold pb-4">We are offering a $1000 website for free!</div>
  <p className="pb-1">Tell us about your business: *</p>
  <textarea
    type="text"
    placeholder="For example: I run a small bakery specializing in artisanal breads."
    name="Business"
    value={additionalInfo.Business}
    onChange={handleChange}
    className={`border-2 w-full py-2.5 relative pl-4 pb-7 rounded-md ${
      errors.Business ? 'border-red-500' : ''
    }`}
  />
  {errors.Business && (
    <p className="text-red-500">Please provide information about your business.</p>
  )}
  <p className="pb-1 pt-5">What type of website do you need? *</p>
  <textarea
    type="text"
    placeholder="For example: I need an e-commerce website to sell my products online."
    name="Need"
    value={additionalInfo.Need}
    onChange={handleChange}
    className={`border-2 w-full py-2.5 relative pl-4  pb-7 rounded-md ${
      errors.Need ? 'border-red-500' : ''
    }`}
  />
  {errors.Need && (
    <p className="text-red-500">Please specify the type of website you need.</p>
  )}

  <button
    type="submit"
    class="btn bg-blue-600 text-white hover:bg-blue-700 cursor-pointer text-center py-2 rounded-md w-full mt-6"
  >
    Submit
  </button>
</form>

  );
};

export default Step2Form;

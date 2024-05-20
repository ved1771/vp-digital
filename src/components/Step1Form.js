import React, { useState } from "react";

const Step1Form = ({ onNext }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
  });
  const [errors, setErrors] = useState({
    Name: false,
    Email: false,
    Phone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset error if the user is typing again
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any field is empty
    if (formData.Name.trim() === "" || formData.Email.trim() === "" || formData.Phone.trim() === "") {
      // Set errors for empty fields
      setErrors({
        Name: formData.Name.trim() === "",
        Email: formData.Email.trim() === "",
        Phone: formData.Phone.trim() === "",
      });
    } else {
      onNext(formData);
    }
  };

  return (
    <form
      className="bg-white p-4 rounded-xl border-2 px-8 py-7 shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="font-bold pb-4">We are offering $1000 website for free</div>
      <p className="pb-1">Your Name : *</p>
      <input
        type="text"
        className={`border-2 w-full py-0.5 relative pl-7 rounded-md ${errors.Name ? 'border-red-500' : ''}`}
        placeholder="Name"
        name="Name"
        value={formData.Name}
        onChange={handleChange}
      />
      {errors.Name && <p className="text-red-500">Please enter your name</p>}
      <p className="pb-1 pt-5">Your Email : *</p>
      <input
        type="email"
        className={`border-2 w-full py-0.5 relative pl-7 rounded-md ${errors.Email ? 'border-red-500' : ''}`}
        placeholder="Email"
        name="Email"
        value={formData.Email}
        onChange={handleChange}
      />
      {errors.Email && <p className="text-red-500">Please enter a valid email</p>}
      <p className="pb-1 pt-5">Phone No. : *</p>
      <input
        type="tel"
        className={`border-2 w-full relative py-0.5 pl-7 rounded-md ${errors.Phone ? 'border-red-500' : ''}`}
        placeholder="+44 12458 854"
        name="Phone"
        value={formData.Phone}
        onChange={handleChange}
      />
      {errors.Phone && <p className="text-red-500">Please enter your phone number</p>}
      <button
        type="submit"
        className="btn bg-blue-600 text-white hover:bg-blue-700 cursor-pointer text-center py-2 rounded-md w-full mt-6"
      >
        Next
      </button>
    </form>
  );
};

export default Step1Form;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import UrgencyPage from "./components/UrgencyPage";
import ThankYouPage from "./components/ThankYouPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmbeddedButtonContainer from "./components/EmbeddedButtonContainer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <Router>
      <div className="">
      <Header />
        
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/book-call" element={<UrgencyPage/>} />
          <Route path="/thankyou" element={<ThankYouPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 text-center rounded-md">
      {message}
    </div>
  );
};

const HeroSection = () => {
  const [spotsLeft, setSpotsLeft] = useState(27);
  const [showPopup, setShowPopup] = useState(false);
  const [initialPopupShown, setInitialPopupShown] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowPopup(true);
      setInitialPopupShown(true);
    }, 5000);

    const secondaryTimer = setTimeout(() => {
      setSpotsLeft(spotsLeft - 1);
      setShowPopup(true);
    }, initialPopupShown ? 45000 : 5000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(secondaryTimer);
    };
  }, [spotsLeft, initialPopupShown]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="block-1 px-8">
      {showPopup && <Popup message={`Hurry up! Now ${spotsLeft} slots left.`} onClose={handleClosePopup} />}
      <div className=" bg-sky-100 max-w-max py-1 px-2.5 text-sky-600 rounded-md italic">
        Only {spotsLeft} spots left! Get your free website now.
      </div>
      <div className=" pt-7 text-3xl font-bold">
        Your Professional Website,
        <br />
        A Special Gift
      </div>
      <div className=" max-w-xs pt-7 pb-7 ">
        <div className="text-xl font-semibold mb-3">Whats Included : </div>
        <ul className="">
          <li className="pb-2">✅ Wrodpress website upto 5 pages </li>
          <li className="pb-2"> ✅ Custom Developemnt</li>
          <li className="pb-2"> ✅ 3 revision</li>
          <li className="pb-2"> ✅ Perimiun theam (worth off 100$)</li>
          <li className="pb-2"> ✅ Answer to your big question: why we offer free website? 🧐 </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;

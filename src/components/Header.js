import React from 'react'
import Logo from "../assets/vp digital_transparent.png"
export default function Header() {
    return (
        <header className="bg-gray-800 text-white flex justify-center">
          <img src={Logo} alt="Logo" className="w-36 " />
        </header>
      );
}

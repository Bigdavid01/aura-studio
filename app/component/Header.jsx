
"use client";

import React from 'react';

import { useState } from "react";

import {Menu, X} from "lucide-react";




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f7f3] px-6 py-5 border border-[#171717] transparent-50%">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-3xl font-bold tracking-tight text-[#171717]">AURA<span 
        className="text-[#d66b45]"></span>.</a>
        <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-6 md:gap-10 absolute md:static top-full left-0 w-full md:w-auto bg-[#f8f7f3] md:bg-transparent py-6 md:py-0 shadow-md md:shadow-none`}>

            <a href="#home" onClick={()=> setMenuOpen(false)} className="text-sm text-gray-700 hover:text-[#d66b45] transition">Home</a>

            <a href="#about" className="text-sm text-gray-700 hover:text-[#d66b45] transition">About</a>

            <a href="#services" onClick={()=> setMenuOpen(false)} className="text-sm text-gray-700 hover:text-[#d66b45] transition">Services</a>

            <a href="#contact" onClick={()=> setMenuOpen(false)} className="text-sm text-gray-700 hover:text-[#d66b45] transition">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 
        bg-[#171717] text-white px-6 py-3 rounded-full text-sm hover:bg-[#d66b45]
        transition">Let's talk <span>-</span></a>
        
        <button onClick={()=> setMenuOpen(! menuOpen)} className="md:hidden text-2xl
        text-[#171717]">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
    </header>
  );
}

export default Header;

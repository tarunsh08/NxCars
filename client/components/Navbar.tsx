"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { Plus, Car, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-orange-500/20 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover-glow rounded-lg px-3 py-2"
          >
            <div className="p-2 glass-orange rounded-lg">
              <Car className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="font-extrabold text-2xl gradient-text">NxCar</h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <SearchBar />
            <Link
              href="/add-car"
              className="flex items-center gap-2 glass-orange px-4 py-2 rounded-lg hover-glow transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">Add Car</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-orange-500/10 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-orange-500" />
            ) : (
              <Menu className="w-6 h-6 text-orange-500" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden glass-dark border-t border-orange-500/20 px-6 py-4 flex flex-col gap-4 animate-fadeIn">
            <SearchBar />
            <Link
              href="/add-car"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 glass-orange px-4 py-2 rounded-lg hover-glow transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">Add Car</span>
            </Link>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

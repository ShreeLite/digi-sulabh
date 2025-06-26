import React from 'react';
import { FaSearch, FaQrcode, FaStar, FaLightbulb, FaMobileAlt, FaCamera, FaComments, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {NavLink } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center p-8 min-h-[80vh]">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Digi-Sulabh: <span className="text-indigo-500">Your Digital Toilet Buddy</span>
          </h1>
          <p className="mb-6 text-lg text-gray-300">
            Find your nearest toilet, scan a QR to use, rate the facility, lodge complaints, and contribute to improving sanitation services.
          </p>
          <div className="flex gap-4">
            <NavLink to='/find' className="bg-indigo-600 hover:bg-yellow-400 hover:text-black transition duration-300 px-6 py-3 rounded font-medium">Get Started</NavLink>
            <button className="border border-white hover:bg-neutral-800 transition duration-300 px-6 py-3 rounded font-medium">Learn More</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-neutral-900 p-4 rounded-lg">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" 
              alt="Toilet"
              className="w-72 h-72 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Find / Scan / Rate Cards */}
      <section className="bg-neutral-900 py-14">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
    
    {/* FIND CARD */}
    <div className="border rounded-xl h-96 py-10 px-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition duration-300 relative overflow-hidden bg-neutral-900">
      <FaSearch className="text-4xl mb-4 text-indigo-500 hover:text-yellow-400 transition duration-300 z-10" />
      <FaSearch className="absolute text-[10rem] text-indigo-900 opacity-10 bottom-[-2rem] right-[-2rem]" />
      <h3 className="font-bold text-3xl z-10">Find Your <span className="text-yellow-400">Nearest Toilet</span></h3>
      <p className="text-xl text-gray-400 my-2 z-10">Locate clean public toilets instantly near you.</p>
      <NavLink to='/find' className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full py-2 rounded flex justify-center items-center gap-2 transition duration-300 z-10">
        <FaSearch /> Find A Toilet
      </NavLink>
      <div className="text-xs text-gray-500 mt-2 z-10">Over 1M toilets mapped</div>
    </div>

    {/* SCAN CARD */}
    <div className="border rounded-xl h-96 py-10 px-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition duration-300 relative overflow-hidden bg-neutral-900">
      <FaQrcode className="text-4xl mb-4 text-indigo-500 hover:text-yellow-400 transition duration-300 z-10" />
      <FaQrcode className="absolute text-[10rem] text-indigo-900 opacity-10 bottom-[-2rem] right-[-2rem]" />
      <h3 className="font-bold text-3xl z-10">Scan a <span className="text-yellow-400">QR Code</span></h3>
      <p className="text-xl text-gray-400 my-2 z-10">Access and use toilets securely and easily.</p>
      <NavLink to='/scan' className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full py-2 rounded flex justify-center items-center gap-2 transition duration-300 z-10">
        <FaQrcode /> Use A Toilet
      </NavLink>
      <div className="text-xs text-gray-500 mt-2 z-10">Scan & use in seconds</div>
    </div>

    {/* RATE/COMPLAINT CARD */}
    <div className="border rounded-xl h-96 py-10 px-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition duration-300 relative overflow-hidden bg-neutral-900">
      <FaStar className="text-4xl mb-4 text-yellow-400 hover:text-red-500 transition duration-300 z-10" />
      <FaStar className="absolute text-[10rem] text-indigo-900 opacity-10 bottom-[-2rem] right-[-2rem]" />
      <h3 className="font-bold text-3xl z-10">Rate. Complaint. <span className="text-red-500">Help Improve</span></h3>
      <p className="text-xl text-gray-400 my-2 z-10">Give feedback or raise a complaint to improve sanitation.</p>
      <NavLink to='/complaint' className="mt-auto bg-red-500 hover:bg-red-600 text-white font-medium w-full py-2 rounded flex justify-center items-center gap-2 transition duration-300 z-10">
        <FaStar /> Rate A Toilet
      </NavLink>
      <div className="text-xs text-gray-500 mt-2 z-10">50K+ complaints resolved</div>
    </div>

  </div>
</section>


      {/* Call To Action Banner */}
      {/* <section className="bg-yellow-400 text-black py-6 text-center font-semibold text-lg">
        Make India Cleaner Today — <span className="underline hover:text-red-500 cursor-pointer">Join Us</span> in this mission!
      </section> */}

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto my-16 p-10 border rounded-lg bg-neutral-900 relative overflow-hidden">
        <FaLightbulb className="absolute text-yellow-400 opacity-10 text-[20rem] top-[-5rem] right-[-5rem]" />
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              <FaLightbulb className="inline-block text-yellow-400 mr-2" />
              Our <span className="text-yellow-400">Vision</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              At <span className="text-indigo-500">Digi-Sulabh</span>, our vision is to revolutionize public sanitation through technology. We aim to provide a clean, accessible, and dignified toilet experience for all by leveraging digital solutions for discovery, usage, and feedback.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              From AI-driven hygiene monitoring to instant complaint resolution, we're building a smart ecosystem where every citizen contributes to a cleaner future. Together, we can make sanitation truly universal and sustainable.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-medium transition duration-300">Join The Mission</button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-neutral-900 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center text-lg">
          <div className="hover:scale-105 transition duration-300">
            <span className="text-yellow-400 font-bold text-3xl block">1M+</span>
            Toilets Mapped
          </div>
          <div className="hover:scale-105 transition duration-300">
            <span className="text-yellow-400 font-bold text-3xl block">50K+</span>
            Complaints Resolved
          </div>
          <div className="hover:scale-105 transition duration-300">
            <span className="text-yellow-400 font-bold text-3xl block">5K+</span>
            Cities Covered
          </div>
        </div>
      </section>

      {/* How We Ensure Cleanliness */}
      <section className="bg-black py-14">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">How We <span className="text-indigo-500">Ensure Cleanliness</span></h2>
          <p className="text-gray-400">A seamless, AI-powered hygiene assurance process.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-4">
          <div className="bg-neutral-900 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
            <FaQrcode className="text-4xl mb-4 text-yellow-400 mx-auto" />
            <h3 className="font-bold text-lg mb-2">Cleaner Scans QR Code</h3>
            <p className="text-gray-300">Cleaner logs details and uploads photos of the facility.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
            <FaMobileAlt className="text-4xl mb-4 text-yellow-400 mx-auto" />
            <h3 className="font-bold text-lg mb-2">AI-Powered Validation</h3>
            <p className="text-gray-300">Our AI model checks images and flags unclean toilets.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
            <FaCamera className="text-4xl mb-4 text-yellow-400 mx-auto" />
            <h3 className="font-bold text-lg mb-2">Daily Cleaning Logs</h3>
            <p className="text-gray-300">Cleaners submit reports every 24 hours for review.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
            <FaComments className="text-4xl mb-4 text-red-500 mx-auto" />
            <h3 className="font-bold text-lg mb-2">Complaints Resolved Fast</h3>
            <p className="text-gray-300">Complaints pass AI check and are resolved within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-gray-400">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-indigo-600 w-8 h-8 flex items-center justify-center rounded-full font-bold">DS</div>
            <span>Digi-Sulabh</span>
          </div>
          <div className="flex gap-4 text-sm flex-wrap justify-center md:justify-end items-center">
            <a href="#" className="hover:text-white">Swachh Bharat Mission</a>
            <a href="#" className="hover:text-white">Our Vision</a>
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">Contact Us</a>
            <a href="mailto:shreemcream@gmail.com" className="hover:text-yellow-400 text-lg"><FaEnvelope /></a>
            <a href="https://github.com/ShreeLite" target="_blank" className="hover:text-yellow-400 text-lg"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shreem-shukla-816982337/" target="_blank" className="hover:text-yellow-400 text-lg"><FaLinkedin /></a>
            <a href="https://instagram.com/shreeyuuuummm" target="_blank" className="hover:text-yellow-400 text-lg"><FaInstagram /></a>
          </div>
        </div>
        <div className="text-center text-xs mt-4 text-gray-500">© 2025 Digi-Sulabh. All rights reserved.</div>
      </footer>

    </div>
  );
};

export default HomePage;

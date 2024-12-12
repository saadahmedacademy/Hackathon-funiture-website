import react from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
    return (
       <>
        <footer className="w-full h-[380px] bg-[#2A254B] flex flex-col text-white">
            <main className="container flex md:flex-row flex-col">
        <div className="w-[65%] px-6 py-4 grid grid-cols-2 md:grid-cols-3">
            <nav className='flex flex-col gap-3'>
                <li>Menu</li>
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
            </nav>

            <nav className='flex flex-col gap-3'>
                <li>Categories</li>
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
            </nav>

            <nav className='flex flex-col gap-3'>
                <li>Our company</li>
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
            </nav>
        </div>
            <div className="w-[35%] border-b border-white px-6 flex flex-col justify-start ">
             <p>
             Join our mailing list
             </p>
            <div className="flex items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#F9F9F9] h-[48px] w-[60%] md:w-[346px] py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A254B] transition"
          />
          <button className="md:px-6 px-8 py-3 text-center bg-[#2A254B] text-white  hover:bg-[#1E1A39] transition">
            Sign Up
          </button>
        </div>
                 </div>
           </main>
            <div className="w-full py-12 flex justify-between items-center">
                <p className="text-lg">Copyright 2022 Avion LTD</p>
                <div className="flex items-center gap-3">
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
                <FaSkype />
                <FaTwitter />
                <FaPinterest />
                </div>
            </div>
        </footer>
       </>
    )
}
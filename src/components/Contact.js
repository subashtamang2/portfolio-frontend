import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import ProfilePic from '../images/girlimg.jpg'

const Contact = () => {
  return (
    <div className="bg-charcoal text-white py-10">
      <h2 className="text-4xl font-semibold mb-6 text-center">Contact With Me</h2>
      <div className="container mx-auto max-w-7xl px-6 flex flex-col  md:flex-row justify-between  gap-10 items-center">

        {/* Left Side */}
        <div className="w-full md:w-1/3 mb-10 md:mb-0 ">
          <img src={ProfilePic} alt="subash" className="rounded-md w-full " />
          <h2 className="text-3xl font-semibold mt-6">John Doe</h2>
          <p className="text-xl">MERN Stack Developer</p>
          <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.</p>
          <p className="mt-4"><span className="font-semibold">Phone:</span> +977 9765577682</p>
          <p className="mt-2"><span className="font-semibold">Email:</span> lamasubaah2@gmail.com</p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" className=" hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://linkedin.com" className="hover:text-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 ">

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

              <input type="text" placeholder="Your Name" className="p-3 mb-4  rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" />
              <input type="text" placeholder="Phone Number" className="p-3 mb-4 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" />
            </div>
            <input type="email" placeholder="Email" className="mt-6 mb-4 p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="Subject" className="mt-6 mb-4 p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Message" className="mt-6 mb-4 p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" rows="6"></textarea>
            <button className="mt-6 p-3 w-full bg-blue-600 rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

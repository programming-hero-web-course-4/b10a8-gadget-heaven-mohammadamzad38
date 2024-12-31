import React from "react";

const Footer = () => {
  return (
    <div className=" m-auto bg-white">
      <div className="space-y-4 py-16 text-center">
        <h1 className="text-3xl font-bold ">Gadget Heaven</h1>
        <p className="text-gray-500">Leading the way in cutting-edge technologyu and innovation.</p>
      </div>
      <div className="border border-gray-200"></div>
      <footer className="footer p-10 justify-center space-x-[300px] text-black bg-white">
        
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

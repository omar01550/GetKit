import React from 'react';
import Link from 'next/link';
import { Facebook, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4
    ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col space-y-4">
          <Link className="logo cursor-pointer text-2xl md:text-3xl capitalize font-semibold" href={'/'}>
                  Sakr
               </Link>

          <p className="text-sm">
            © {new Date().getFullYear()} powerd by omar medhat
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="#">
              <Instagram />
          </Link>
          <Link href="#">
              <Facebook />
          </Link>
          <Link href="#"> 
                       <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

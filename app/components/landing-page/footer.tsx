import React from "react";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer id="footer" className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <a href="https://www.instagram.com/sejafluxo/" rel="noopener noreferrer" target="_blank">
      </a>
    </p>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Powered by Fluxo —
      <a href="https://www.instagram.com/linkshowcase/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@linkshowcase</a>
    </p>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      <a  href="mailto:suportelinkshowcase@gmail.com?subject=Contato%LinkShowCase%20Company&body=Olá%20Fluxo%20Company,%20gostaria%20de%20entrar%20em%20contato." className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Envie um email</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.instagram.com/linkshowcase/" target="_blank" className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </span>
  </div>
</footer>
    )
}
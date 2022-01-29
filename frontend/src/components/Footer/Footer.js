import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600">
      <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
          <div className="flex mx-auto text-white text-center">
            Made with<span className="px-2" role="img" aria-label="heart">❤️ &nbsp;</span>by &nbsp; <cite> Pratt</cite>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

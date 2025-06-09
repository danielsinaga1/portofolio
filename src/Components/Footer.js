import React from "react";
function Footer() {
  return (
    <footer className="container fixed bottom-0 py-1 mx-auto bg-white md:left-20 dark:bg-dark-mode">
      <p className="w-full text-xs text-center text-dark-content dark:text-light-content">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
       Daniel Giovanni Sinaga 
        </a>{" "}
        with
        <span className="font-medium text-gradient"> Love</span> &
        <span className="font-medium text-gradient"> Coffee</span>
      </p>
    </footer>
  );
}
export default Footer;

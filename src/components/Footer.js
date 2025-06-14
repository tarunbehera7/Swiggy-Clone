import React from 'react';

const Footer = () => {
  return (
   <>
    <footer className="footer">
      {/* <p>© 2025 Swiggy Clone</p> */}
      <p>&copy; {new Date().getFullYear()} Swiggy Clone. All rights reserved.</p>
    </footer>
    </>
  );
};

export default Footer;
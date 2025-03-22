const Footer = () => {
    return (
      <footer className="tw:bg-gray-900 tw:text-white tw:py-4 tw:text-center">
        <p className="tw:text-sm">&copy; {new Date().getFullYear()} @Sunny Sharma. All rights reserved.</p>
        <div className="tw:mt-2 tw:flex tw:justify-center tw:space-x-4">
          <a href="#" className="tw:hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="tw:hover:text-gray-400">Terms of Service</a>
          <a href="#" className="tw:hover:text-gray-400">Contact</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
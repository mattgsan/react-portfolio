import logo from "../assets/header-logo.png";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center gap-4 text-3xl">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg mr-4"
        >
          Open Resume
        </a>
        <a
          href="https://www.linkedin.com/in/mattgsan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-3xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

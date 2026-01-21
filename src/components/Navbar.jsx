import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate();
  const links = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `transition text-sm font-medium ${
      isActive
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Tool<span className="text-gray-400">Stack</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={()=>{navigate('/tools')}}
          className="hidden md:block px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
        >
          Try Tool
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 bg-black border-t border-white/10 text-gray-400">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/tools"
            className="mt-4 px-5 py-2 rounded-full border border-white/20 text-center hover:bg-white hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Try Tool
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

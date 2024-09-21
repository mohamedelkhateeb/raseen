const Header = () => {
  return (
    <header className="bg-blue-800 text-white">
      <div className=" container mx-auto p-4 flex justify-between items-center">
        <div className="logo">
          {/* Add Logo or Brand */}
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500">
            Services
          </a>
          <a href="#" className="hover:text-yellow-500">
            About
          </a>
          <a href="#" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>
        <div className="actions flex space-x-2">
          <button className="bg-yellow-500 text-blue-800 px-4 py-2 rounded">
            Login
          </button>
          <button className="border border-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

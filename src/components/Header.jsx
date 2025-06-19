function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-semibold text-primary">Interior</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            Shop
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="#" className="hover:text-primary">
            Contact
          </a>
        </nav>
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  );
}

export default Header;

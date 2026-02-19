import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Certifications", path: "/certifications" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container flex h-20 items-center justify-between md:h-24">
        
        {/* Logo + Brand (Single Line) */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Greenleaf-Bio"
            className="h-10 w-auto object-contain md:h-12"
          />

          <span className="text-lg md:text-xl font-semibold tracking-tight">
            <span className="text-foreground">GreenLeaf - </span>
            <span className="text-primary font-bold ml-2">Bio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <Button asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="space-y-4 border-t bg-white px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block text-base font-medium ${
                pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <Button asChild className="w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt="GreenLeaf Bio" className="h-10 brightness-0 invert" />
          <p className="text-sm opacity-70">
            Premium compostable packaging for businesses across Canada & the USA.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Products</Link></li>
            <li><Link to="/certifications" className="hover:opacity-100 transition-opacity">Certifications</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@greenleaf-bio.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 647-834-3606</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Canada & USA</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Get Started</h4>
          <p className="text-sm opacity-70 mb-4">Ready to switch to sustainable packaging?</p>
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} GreenLeaf Bio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

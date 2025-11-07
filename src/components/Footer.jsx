import { FaBeer, FaInstagram, FaInstagramSquare, FaLinkedin, FaTiktok } from "react-icons/fa";
const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-playfair font-bold text-accent mb-2">Rachel</h3>
            <p className="text-gray-800">Counselling Psychologist</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-shadow-gray-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/rachel_makamreh?igsh=MXRuNXhrNzlzMmFzYQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-accent/30 rounded-full flex items-center justify-center transition-all"
              aria-label="Instagram"
            >
             <FaInstagram />
            
            </a>
                  <a
              href="https://www.tiktok.com/@rachel__hanna?_r=1&_t=ZN-91Am7xxfRiw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-accent/30 rounded-full flex items-center justify-center transition-all"
              aria-label="tiktok"
            >
             <FaTiktok />
            
            </a>
                  <a
              href="https://www.linkedin.com/in/rachel-makhamreh-360002175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-accent/30 rounded-full flex items-center justify-center transition-all"
              aria-label="Linkedin"
            >
             <FaLinkedin />
            
            </a>
               
            <a
              href="mailto:Rachel_em@outlook.com"
              className="w-10 h-10 bg-white/10 hover:bg-accent/30 rounded-full flex items-center justify-center transition-all"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-900 text-sm">
            © 2025 Rachel. All rights reserved. | Design and Developed by <a>Web Wise Agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

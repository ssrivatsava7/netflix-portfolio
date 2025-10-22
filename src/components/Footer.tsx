import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">PORTFOLIO</h2>
          <p className="text-gray-400 max-w-xs">
            Building exceptional digital experiences with modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#education" className="hover:text-primary">Education</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#experience" className="hover:text-primary">Experience</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary">Connect</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <p className="text-gray-400 mb-4">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="flex space-x-5">
            <a
              href="https://github.com/ssrivatsava7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/snigdha-srivatsava"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:ssrivatsava2@gmail.com" className="hover:text-primary">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

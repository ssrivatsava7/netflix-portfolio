import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Get in Touch */}
        <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
        <p className="text-gray-400 mb-4">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className="flex justify-center space-x-5 mb-6">
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

      <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

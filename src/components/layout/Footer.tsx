import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Deepansh Sharma</h3>
            <p className="text-gray-400 mb-4">AI/ML Enthusiast | Full-Stack Developer | Tech Explorer</p>
            <p className="text-gray-400">Building smart systems and sustainable solutions through AI & code.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:deepanshs684@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  deepanshs684@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919451092778" className="text-gray-400 hover:text-white transition-colors">
                  +91 9451092778
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a 
                  href="https://linkedin.com/in/deepansh-sharma-697a0630b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resume</h3>
            <a 
              href="https://drive.google.com/file/d/1WHFfx-A6sJedUIBlb_einGvBZ66dRBQm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors inline-flex items-center"
            >
              View Resume
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Deepansh Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
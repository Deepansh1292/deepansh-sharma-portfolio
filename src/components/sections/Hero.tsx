import React from 'react';
import Button from '../ui/Button';
import { ArrowDown, Mail, Linkedin, Phone, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-screen flex items-center py-12 md:py-16 pb-8 md:pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full mb-4">
                B.Tech Computer Science Student
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight break-words">
                Deepansh <span className="text-blue-600 dark:text-blue-400">Sharma</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 md:mb-3 break-words">
                AI/ML Enthusiast | Full-Stack Developer | Tech Explorer
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl break-words">
                Building smart systems and sustainable solutions through AI & code.
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                <Button href="#projects" variant="primary">
                  View Projects
                </Button>
                <Button href="https://drive.google.com/file/d/1WHFfx-A6sJedUIBlb_einGvBZ66dRBQm/view?usp=sharing" variant="outline">
                  <Eye size={18} className="mr-2" />
                  View Resume
                </Button>
                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:deepanshs684@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="tel:+919451092778"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/deepansh-sharma-697a0630b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full overflow-hidden shadow-xl animate-float">
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`} 
                alt="Deepansh Sharma"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
        </div>
        
        <div className="hidden lg:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <a href="#about" className="animate-bounce">
            <ArrowDown size={24} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
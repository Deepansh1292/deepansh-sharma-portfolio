import React from 'react';
import Section from '../ui/Section';
import { Lightbulb, Code, Globe, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Learn more about my background, interests, and what drives me in the field of technology"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-lg mb-6 leading-relaxed">
            I’m Deepansh Sharma, a B.Tech (Hons) Computer Science student specializing in AI & ML at
            UPES Dehradun (2022–2026, CGPA 8.37/10). I’m passionate about building intelligent, user-centric
            systems that create real-world impact.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            I’ve developed full‑stack applications and ML solutions, including an AQI prediction web app
            using Random Forest and LSTM (Flask + React), and domain projects like an NLP‑powered travel
            assistant and a deep learning based waste management system. I enjoy turning complex problems
            into clear, accessible products.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            I’m comfortable across Java, Python, C, and JavaScript, and I work with modern web technologies
            (HTML, CSS, React) alongside core ML areas such as neural networks, deep learning, NLP, and
            computer vision. I value communication, leadership, teamwork, and critical thinking in every
            collaboration.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+919451092778" className="text-blue-600 dark:text-blue-400 hover:underline">+91 9451092778</a>
            <span className="text-gray-400">•</span>
            <a href="mailto:deepanshs684@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">deepanshs684@gmail.com</a>
            <span className="text-gray-400">•</span>
            <a href="https://linkedin.com/in/deepansh-sharma-697a0630b" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Brain className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI & ML Enthusiast</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Passionate about neural networks, deep learning models, and intelligent systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-teal-500">
              <div className="flex items-start">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full mr-4">
                  <Code className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experienced in building responsive web applications and robust backend systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mr-4">
                  <Lightbulb className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enjoy tackling complex challenges and delivering reliable, impactful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
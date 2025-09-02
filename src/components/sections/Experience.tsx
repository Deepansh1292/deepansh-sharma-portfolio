import React from 'react';
import Section from '../ui/Section';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Experience" 
      subtitle="My professional journey and work experience"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-6 sm:pl-8 pb-8">
          <div className="mb-12 relative">
            <div className="absolute -left-8 sm:-left-10 top-0 bg-blue-500 dark:bg-blue-400 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Project Intern</h3>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                  IBM
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>June 2025 – July 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>—</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <p>Air Quality Index Prediction Web App</p>

                <h4 className="font-semibold">Key Contributions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Built a full‑stack AQI prediction system using Flask and React.js.</li>
                  <li>Integrated Random Forest and LSTM models for real‑time predictions and health recommendations.</li>
                  <li>Designed and deployed RESTful APIs with JSON communication and implemented data pre‑processing.</li>
                  <li>Created a responsive UI following modern design practices.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Random Forest</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">LSTM</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">REST APIs</span>
              </div>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 top-0 bg-blue-500 dark:bg-blue-400 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Social Work Intern</h3>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                  Roots 2 Bloom
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>June – July 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Remote</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <p>
                  Worked on social impact and policy research initiatives contributing to awareness and community development.
                </p>
                <h4 className="font-semibold">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Researched and analyzed 21 public policies to evaluate impact and implementation.</li>
                  <li>Published an article on Indian democracy, covering strengths and challenges.</li>
                  <li>Participated in educational industrial visits to understand real-world applications.</li>
                  <li>Collaborated on quizzes and presentations for knowledge-sharing within the team.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Policy Research</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Content Writing</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Social Impact</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Data Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech CSE (Hons) – AI & ML',
      institution: 'UPES Dehradun, India',
      duration: 'August 2022 – June 2026',
      score: 'CGPA: 8.37/10.0',
      icon: <GraduationCap size={24} />,
      color: 'blue'
    },
    {
      degree: 'ISC Higher Secondary Certificate (Class XII)',
      institution: 'City Montessori School, Lucknow, India',
      duration: 'March 2021 – May 2022',
      score: 'Percentage: 93.0/100.0',
      icon: <Award size={24} />,
      color: 'teal'
    },
    {
      degree: 'ICSE Secondary School Certificate (Class X)',
      institution: 'City Montessori School, Lucknow, India',
      duration: 'March 2019 – June 2020',
      score: 'CGPA: 95.0/100.0',
      icon: <Award size={24} />,
      color: 'orange'
    }
  ];

  return (
    <Section 
      id="education" 
      title="Education" 
      subtitle="My academic journey and qualifications"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {educationData.map((item, index) => (
          <Card key={index} className="p-6">
            <div className={`flex items-center mb-4`}>
              <div className={`bg-${item.color}-100 dark:bg-${item.color}-900/30 p-3 rounded-full mr-3`}>
                <span className={`text-${item.color}-600 dark:text-${item.color}-400`}>
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{item.degree}</h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg">{item.institution}</p>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>{item.duration}</span>
              </div>
              
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium whitespace-nowrap">
                  {item.score}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Education;
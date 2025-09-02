import React from 'react';
import Section from '../ui/Section';
import { Code, Server, Database, Layout, Brain, Users } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['C', 'Java', 'Python', 'JavaScript'],
      color: 'blue'
    },
    {
      name: 'Web Technologies',
      icon: <Layout size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'teal'
    },
    {
      name: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'SQL', 'Firebase'],
      color: 'yellow'
    },
    {
      name: 'ML/AI',
      icon: <Brain size={24} />,
      skills: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision'],
      color: 'purple'
    },
    {
      name: 'Soft Skills',
      icon: <Users size={24} />,
      skills: ['Communication', 'Leadership and Teamwork', 'Critical Thinking'],
      color: 'orange'
    }
  ];

  const getColorClass = (color: string, isDark: boolean) => {
    const prefix = isDark ? 'dark:' : '';
    return `${prefix}bg-${color}-${isDark ? '900/30' : '100'} ${prefix}text-${color}-${isDark ? '400' : '600'}`;
  };

  return (
    <Section 
      id="skills" 
      title="Skills" 
      subtitle="Technical and professional capabilities I've developed"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className={`p-6 border-b border-gray-100 dark:border-gray-700 flex items-center`}>
              <div className={`bg-${category.color}-100 dark:bg-${category.color}-900/30 p-3 rounded-full mr-4`}>
                <span className={`text-${category.color}-600 dark:text-${category.color}-400`}>
                  {category.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-${category.color}-50 dark:bg-gray-700 text-${category.color}-700 dark:text-${category.color}-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Skill Proficiency</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          {['Python', 'Java', 'Web Development', 'ML/AI', 'Problem Solving'].map((skill, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {['85%', '90%', '80%', '85%', '95%'][index]}
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-teal-500"
                  style={{ width: ['85%', '90%', '80%', '85%', '95%'][index] }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
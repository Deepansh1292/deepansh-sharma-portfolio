import React, { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ExternalLink, MessageSquare, Trash2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  link: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      title: 'GUIDE PRO',
      description: 'Smart Chatbot for Expert Assistance (Travel)',
      image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Java', 'React', 'HTML', 'CSS', 'MongoDB'],
      features: [
        'NLP-based intent recognition',
        'Real-time recommendations',
        'API integration',
        'Robust Java backend',
        'WebSocket communication',
        'Performance testing and deployment'
      ],
      link: 'https://github.com/Deepansh1292/GuidePro-Travel-Assistant.git',
      icon: <MessageSquare size={24} />
    },
    {
      title: 'SORT SMART',
      description: 'Advanced Waste Management System',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'Flask', 'React', 'JavaScript', 'HTML', 'CSS'],
      features: [
        'Deep learning-based waste classification',
        'Real-time disposal guidelines',
        'Educational resources',
        'API integration with Python backend',
        'WebSocket communication',
        'Optimized performance and cloud deployment'
      ],
      link: 'https://github.com/PranitThomas/Sort-Smart-Advanced-Waste-Management-System.git',
      icon: <Trash2 size={24} />
    },
    {
      title: 'Air Quality Index (AQI) Prediction Web App',
      description: 'Full-stack AQI prediction with ML models and health guidance',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flask', 'React', 'Python', 'JavaScript', 'Random Forest', 'LSTM'],
      features: [
        'RESTful APIs with JSON communication',
        'Data preprocessing and model integration',
        'Real-time AQI predictions',
        'Health recommendations',
        'Responsive UI with modern design'
      ],
      link: 'https://github.com/Deepansh1292/Air-Quality-Index-AQI-Prediction.git',
      icon: <ExternalLink size={24} />
    }
  ];

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <Section 
      id="projects" 
      title="Projects" 
      subtitle="Showcasing my technical abilities and problem-solving skills"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <Card key={index} className="h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
                <div className="p-4 text-white">
                  <div className="bg-blue-600 dark:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4 flex-1">
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <Button onClick={() => openProjectDetails(project)}>
                  View Details
                </Button>
                <Button href={project.link} variant="outline" className="ml-2">
                  <ExternalLink size={16} className="mr-1" /> Visit
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-stretch sm:items-center justify-center p-0 sm:p-4" onClick={closeProjectDetails}>
          <div className="bg-white dark:bg-gray-800 rounded-none sm:rounded-lg w-full sm:max-w-3xl max-h-none sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 sm:h-64 md:h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
              >
                ✕
              </button>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-end pointer-events-none">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <p className="text-lg">{selectedProject.description}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  href={selectedProject.link} 
                  variant="primary"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Visit Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
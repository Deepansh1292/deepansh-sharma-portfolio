import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud, Coursera',
      date: '',
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://drive.google.com/file/d/1-xwrCpkODIVoglibtceNW6FyjVdJEhZP/view?usp=sharing'
    },
    {
      title: 'HTML, CSS and JavaScript for Web Developers',
      issuer: 'Johns Hopkins University, Coursera',
      date: '',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://drive.google.com/file/d/1anvvntKdC9I5qUaK9nx6F9K2KIhGGt1a/view?usp=sharing'
    },
    {
      title: 'DevOps Bootcamp',
      issuer: 'iNT College - Institute of Innovation & Technology',
      date: '2024',
      image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://drive.google.com/file/d/1okLSRgsYK9MertsWq6VIXGjJKZ6uFmBn/view?usp=drive_link'
    }
  ];

  return (
    <Section 
      id="certifications" 
      title="Certifications" 
      subtitle="Professional certifications and courses I've completed"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="h-full flex flex-col">
            <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white p-2 rounded-bl-lg">
                <Award size={20} />
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">{cert.date}</p>
              
              <div className="mt-auto">
                <Button href={cert.link} variant="outline" className="w-full justify-center">
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
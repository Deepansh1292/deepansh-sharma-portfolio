import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFormStatus('submitting');

    try {
      const endpoint = import.meta.env.VITE_GAS_ENDPOINT as string | undefined;
      if (!endpoint) {
        throw new Error('Submission endpoint is not configured.');
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Unknown error');
      setFormStatus('error');
    }
  };

  return (
    <Section 
      id="contact" 
      title="Contact Me" 
      subtitle="Let's connect and discuss potential collaborations"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me through any of the following methods.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a 
                  href="mailto:deepanshs684@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  deepanshs684@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full mr-4">
                <Phone className="text-teal-600 dark:text-teal-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a 
                  href="tel:+919451092778" 
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  +91 9451092778
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mr-4">
                <Linkedin className="text-orange-600 dark:text-orange-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">LinkedIn</h4>
                <a 
                  href="https://linkedin.com/in/deepansh-sharma-697a0630b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  linkedin.com/in/deepansh-sharma-697a0630b
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Dehradun, Uttarakhand, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button href="https://drive.google.com/file/d/1WHFfx-A6sJedUIBlb_einGvBZ66dRBQm/view?usp=sharing" variant="outline">
              View Resume
            </Button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            
            <Button 
              type="submit"
              variant="primary"
              className="w-full justify-center"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? (
                'Sending...'
              ) : formStatus === 'success' ? (
                'Message Sent!'
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
            
            {formStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-md text-sm">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-md text-sm">
                Something went wrong. Please try again later. {errorMessage ? `(${errorMessage})` : ''}
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
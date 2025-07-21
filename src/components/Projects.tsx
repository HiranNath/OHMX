import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js, featuring advanced filtering, payment integration, and real-time inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      date: "2024",
      team: ["Alex", "Marcus"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Design System",
      description: "Comprehensive design system and component library used across multiple projects, ensuring consistency and scalability in all our digital products.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Figma", "React", "Storybook", "TypeScript"],
      date: "2024",
      team: ["Sarah", "Alex"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Mobile Finance App",
      description: "Cross-platform mobile application for personal finance management with budgeting tools, expense tracking, and investment portfolio overview.",
      image: "https://images.pexels.com/photos/5849574/pexels-photo-5849574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["React Native", "Firebase", "Plaid API", "Charts.js"],
      date: "2023",
      team: ["Emily", "Marcus"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Intelligent content generation platform powered by AI, helping businesses create engaging copy, social media posts, and marketing materials.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Python", "OpenAI", "React", "FastAPI"],
      date: "2024",
      team: ["Marcus", "Sarah"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Modern real estate platform with virtual tours, advanced search filters, and integrated CRM system for agents and property management.",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Next.js", "Three.js", "MongoDB", "Mapbox"],
      date: "2023",
      team: ["Alex", "Emily"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Health Monitoring Dashboard",
      description: "Comprehensive health monitoring dashboard for healthcare providers, featuring patient data visualization, appointment scheduling, and telemedicine integration.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Vue.js", "Django", "WebRTC", "Chart.js"],
      date: "2024",
      team: ["Sarah", "Marcus"],
      liveUrl: "#",
      githubUrl: "#"
    },
     {
      id: 7,
      title: "Health Monitoring Dashboard",
      description: "Comprehensive health monitoring dashboard for healthcare providers, featuring patient data visualization, appointment scheduling, and telemedicine integration.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Vue.js", "Django", "WebRTC", "Chart.js"],
      date: "2024",
      team: ["Sarah", "Marcus"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions that have helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:from-gray-800 hover:to-gray-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    <ExternalLink size={16} className="text-black" />
                  </a>
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users size={14} className="mr-1" />
                    {project.team.join(", ")}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
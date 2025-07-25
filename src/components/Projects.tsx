  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
  import { projectsData } from '../data/projectsData';

  interface ProjectsProps {
    showAll?: boolean;
  }

  const Projects: React.FC<ProjectsProps> = ({ showAll = false }) => {
    const navigate = useNavigate();
    const projectsToShow = showAll ? projectsData : projectsData.slice(0, 3);

    return (
      <section id="projects" className={showAll ? "pt-16 pb-20 bg-black" : "py-20 bg-black"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Latest Projects
              </span>
            </h2>
            {showAll && (
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">Explore our complete portfolio of innovative solutions.</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:from-gray-800 hover:to-gray-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.liveUrl} onClick={(e) => e.stopPropagation()} className="p-2 bg-orange-500 rounded-full hover:bg-orange-600"><ExternalLink size={16} className="text-black" /></a>
                    <a href={project.githubUrl} onClick={(e) => e.stopPropagation()} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"><Github size={16} className="text-white" /></a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-400"><Calendar size={14} className="mr-1" />{project.date}</div>
                      <div className="flex items-center text-sm text-gray-400"><Users size={14} className="mr-1" />{project.team.join(", ")}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full group-hover:bg-orange-500 group-hover:text-black transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && (
              <div className="text-center mt-12">
                  <button onClick={() => navigate('/projects')} className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">View All Projects</button>
              </div>
          )}
        </div>
      </section>
    );
  };

  export default Projects;
import React from 'react';
import { Github, Linkedin, Mail, Code, Palette, Database, Smartphone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ayyappads",
      role: "Hardware Designer",
      image: "/ayyapadas.webp",
      icon: <Code size={24} />,
      skills: ["Robo Making"],
      bio: "Passionate hardware designer creating beautiful projects .",
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@groupportfolio.com"
      }
    },
    {
      id: 2,
      name: "Adhil Jahan",
      role: "UI/UX Designer",
      image: "/Adhil.webp",
      icon: <Palette size={24} />,
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      bio: "Creative designer focused on user-centered design principles to enhance user experience.",
      social: {
        github: "http://github.com/SiMoNRiLeY-141/",
        linkedin: "http://linkedin.com/in/adhiljahan",
        email: "adhiljahan2@gmail.com"
      }
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Backend Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1",
      icon: <Database size={24} />,
      skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
      bio: "Backend specialist with expertise in scalable architecture and database design.",
      social: {
        github: "#",
        linkedin: "#",
        email: "marcus@groupportfolio.com"
      }
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "Mobile Developer",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1",
      icon: <Smartphone size={24} />,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      bio: "Mobile development expert crafting seamless cross-platform applications.",
      social: {
        github: "#",
        linkedin: "#",
        email: "emily@groupportfolio.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Our
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Creative Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four passionate professionals united by a shared vision of creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {teamMembers.map((member) => (
            // Card Container
            <div
              key={member.id}
              className="relative group h-96 w-full rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Background Image - Always Visible */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Always Visible Name and Role */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-orange-400 font-semibold">{member.role}</p>
              </div>

              {/* Overlay with Full Content - Fades in on Hover */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-orange-400 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-start space-x-4 pt-4 border-t border-white/20">
                    <a href={member.social.github} className="text-gray-300 hover:text-orange-400 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-300 hover:text-orange-400 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-300 hover:text-orange-400 transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

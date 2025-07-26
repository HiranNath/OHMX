import React from 'react';
import { Github, Linkedin, Mail, Code, Palette, Database, Smartphone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ayyappa Das",
      role: "Hardware Designer",
      image: "/team/ayyapadas.webp",
      icon: <Code size={24} />,
      skills: ["PCB Designing", "Circuit Designing", "3D Modelling"],
      bio: "Passionate hardware designer creating beautiful projects.",
      social: {
        github: "#",
        linkedin: "https://linkedin.com/in/ayyappadasvasudevan",
        email: "alex@groupportfolio.com"
      }
    },
    {
      id: 2,
      name: "Adhil Jahan",
      role: "Coder",
      image: "/team/adhil.webp",
      icon: <Palette size={24} />,
      skills: ["Figma", "Arduino IDE", "C", "Prototyping", "Full Stack"],
      bio: "Passionate coder crafting flawless line‑following algorithms.",
      social: {
        github: "https://github.com/SiMoNRiLeY-141/",
        linkedin: "https://linkedin.com/in/adhiljahan",
        email: "adhiljahan2@gmail.com"
      }
    },
    {
      id: 3,
      name: "Namiya Abdul Assiz",
      role: "Tester",
      image: "/team/namiya.webp",
      icon: <Database size={24} />,
      skills: ["Troubleshooting", "Arduino IDE"],
      bio: "Hunting down glitches until every track is conquered.",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/namiya-abdul-assiz-46a57525a",
        email: "namiyaabdulassiz@gmail.com"
      }
    },
    {
      id: 4,
      name: "Kesav",
      role: "Graphic Designer",
      image: "/team/kesav.webp",
      icon: <Smartphone size={24} />,
      skills: ["Photoshop", "FIgma", "Illustrator"],
      bio: "Whipping up visuals that make your project pop.",
      social: {
        github: "#",
        linkedin: "#",
        email: "kesavskp2005@gmail.com"
      }
    },
    {
      id: 5,
      name: "Roshith",
      role: "Content Creator",
      image: "/team/roshith.webp",
      icon: <Smartphone size={24} />,
      skills: ["Videography", "Video Editing", "Audio Mixing"],
      bio: "Crafting engaging videos that bring ideas to life on screen.",
      social: {
        github: "#",
        linkedin: "#",
        email: "roshi60t@gmail.com"
      }
    }
    ,
    {
      id: 6,
      name: "Amalkrishnan",
      role: "Social Media Manager",
      image: "/team/amal.webp",
      icon: <Smartphone size={24} />,
      skills: ["Media Management", "Video/Photo Editing", "Communiuty Management"],
      bio: "Showcasing builds that stop thumbs mid‑scroll.",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/amalkrishnan-k-0a9639352",
        email: "amalkrishnank91@gmail.com"
      }
    },
    {
      id: 7,
      name: "Adeline Anto",
      role: "Logistics",
      image: "/team/adeline.webp",
      icon: <Smartphone size={24} />,
      skills: ["Inventory Tracking", "Budget Compliance", "Outreach"],
      bio: "Mobile development expert crafting seamless cross-platform applications.",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/adeline-anto-38a6652a1/",
        email: "adelineanto1@gmail.com"
      }
    },
    {
      id: 8,
      name: "Najiya",
      role: "Competition Scout",
      image: "/team/najiya.webp",
      icon: <Smartphone size={24} />,
      skills: ["Research & calendar‑tracking", "Deadline Management", "Risk Evaluation"],
      bio: "Spotting the next contest where we can shine.",
      social: {
        github: "#",
        linkedin: "#",
        email: "najiyaka2004@gmail.com"
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

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            // Card Container
            <div
              key={member.id}
                className="relative group h-96 w-full sm:w-[45%] lg:w-[25%] rounded-2xl overflow-hidden shadow-xl"            
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

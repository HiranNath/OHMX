import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

// This prop tells the component whether to show all members or just a few
interface TeamProps {
  showAll?: boolean;
}

const Team: React.FC<TeamProps> = ({ showAll = false }) => {
  const navigate = useNavigate();

  const teamMembers = [
    { id: 1, name: "Ayyappa Das", role: "Hardware Designer", image: "/team/ayyapadas.webp", bio: "Passionate hardware designer.", social: { github: "#", linkedin: "#", email: "#" } },
    { id: 2, name: "Adhil Jahan", role: "Coder", image: "/team/adhil.webp", bio: "Passionate coder crafting flawless algorithms.", social: { github: "#", linkedin: "#", email: "#" } },
    { id: 3, name: "Namiya Abdul Assiz", role: "Tester", image: "/team/namiya.webp", bio: "Hunting down glitches until every track is conquered.", social: { github: "#", linkedin: "#", email: "#" } },
    { id: 4, name: "Kesav", role: "Graphic Designer", image: "/team/kesav.webp", bio: "Whipping up visuals that make your project pop.", social: { github: "#", linkedin: "#", email: "#" } },
    { id: 5, name: "Roshith", role: "Content Creator", image: "/team/roshith.webp", bio: "Crafting engaging videos that bring ideas to life.", social: { github: "#", linkedin: "#", email: "#" } },
    { id: 6, name: "Amalkrishnan", role: "Social Media Manager", image: "/team/amal.webp", bio: "Showcasing builds that stop thumbs mid‑scroll.", social: { github: "#", linkedin: "#", email: "#" } },
    { id: 7, name: "Adeline Anto", role: "Logistics", image: "/team/adeline.webp", bio: "Ensuring the project stays on track and on budget.", social: { github: "#", linkedin: "#", email: "#" } },
    { id: 8, name: "Najiya", role: "Competition Scout", image: "/team/najiya.webp", bio: "Spotting the next contest where we can shine.", social: { github: "#", linkedin: "#", email: "#" } }
  ];

  const membersToShow = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section id="team" className={showAll ? "pt-16 pb-20 bg-gray-900" : "py-20 bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Our
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Creative Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate professionals united by a shared vision.
          </p>
        </div>

        {/* --- THIS IS THE CORRECTED PART --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {membersToShow.map((member) => (
            <div
              key={member.id}
              // The responsive width classes are no longer needed here
              className="relative group h-96 w-full rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-orange-400 font-semibold">{member.role}</p>
              </div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-start space-x-4 pt-4 border-t border-white/20">
                    <a href={member.social.github} className="text-gray-300 hover:text-orange-400 transition-colors"><Github size={20} /></a>
                    <a href={member.social.linkedin} className="text-gray-300 hover:text-orange-400 transition-colors"><Linkedin size={20} /></a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-300 hover:text-orange-400 transition-colors"><Mail size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-16">
            <button
              onClick={() => navigate('/team')}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Members
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
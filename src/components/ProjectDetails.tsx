import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, User, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Footer from './Footer';

const ProjectDetails: React.FC = () => {
const { id } = useParams<{ id: string }>();
const navigate = useNavigate();
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [isModalOpen, setIsModalOpen] = useState(false);

const project = projectsData.find(p => p.id === parseInt(id || '0'));

if (!project) {
return (
<div className="min-h-screen bg-black text-white flex items-center justify-center">
<div className="text-center">
<h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
<button
onClick={() => navigate('/')}
className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition-colors"
>
Back to Home
</button>
</div>
</div>
);
}

const openImageModal = (index: number) => {
setCurrentImageIndex(index);
setIsModalOpen(true);
};

const closeImageModal = () => {
setIsModalOpen(false);
};

const nextImage = () => {
setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
};

const prevImage = () => {
setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
};

return (
<div className="min-h-screen bg-black text-white">
{/* Hero Section */}
<div className="relative pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button
onClick={() => navigate(-1)}
className="flex items-center text-orange-500 hover:text-orange-400 transition-colors mb-8 group"
>
<ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
Back to Projects
</button>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
<p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.detailedDescription}</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex items-center text-gray-300"><Calendar size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Year</p><p className="font-semibold">{project.date}</p></div></div>
<div className="flex items-center text-gray-300"><Clock size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Duration</p><p className="font-semibold">{project.duration}</p></div></div>
<div className="flex items-center text-gray-300"><Users size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Team</p><p className="font-semibold">{project.team.join(', ')}</p></div></div>
<div className="flex items-center text-gray-300"><User size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Role</p><p className="font-semibold">{project.role}</p></div></div>
</div>
</div>
<div className="relative">
<img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
</div>
</div>
</div>
</div>

{/* Content Sections */}
{/* This outer div centers the overall content area on the page */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
{/* This inner div aligns the content to the left of the centered area */}
<div className="max-w-4xl">
<div className="space-y-16">

{/* Key Features Section */}
<section>
<h2 className="text-3xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500/30 pb-2">Key Features</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-gray-300">
{project.features.map((feature, index) => ( <li key={index} className="pl-2">{feature}</li> ))}
</ul>
</section>

{/* Project Gallery Section */}
<section>
<h2 className="text-3xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500/30 pb-2">Project Gallery</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
{project.gallery.map((image, index) => (
<div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => openImageModal(index)}>
<img src={image} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<ExternalLink size={24} className="text-white" />
</div>
</div>
))}
</div>
</section>

{/* Technologies Used Section */}
<section>
<h2 className="text-3xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500/30 pb-2">Technologies Used</h2>
<div className="flex flex-wrap gap-3">
{project.technologies.map((tech) => (
<span key={tech} className="px-4 py-2 bg-gray-900/80 text-gray-300 text-sm rounded-full ring-1 ring-white/10">
{tech}
</span>
))}
</div>
</section>

</div>
</div>
</div>


{/* Image Modal */}
{isModalOpen && (
<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
<div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
<button onClick={closeImageModal} className="absolute -top-10 right-0 text-white hover:text-orange-500 transition-colors z-20"><X size={30} /></button>
<button onClick={prevImage} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-orange-500 transition-colors z-20 bg-black/30 rounded-full p-2"><ChevronLeft size={32} /></button>
<button onClick={nextImage} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-orange-500 transition-colors z-20 bg-black/30 rounded-full p-2"><ChevronRight size={32} /></button>
<img src={project.gallery[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-3 py-1 rounded-full"><p className="text-sm">{currentImageIndex + 1} of {project.gallery.length}</p></div>
</div>
</div>
)}

<Footer />
</div>
);
};

export default ProjectDetails;
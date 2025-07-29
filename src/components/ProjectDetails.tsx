import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, User, ChevronLeft, ChevronRight, X, ShoppingCart } from 'lucide-react';
import { projectsData, Component } from '../data/projectsData';
import { useCart } from '../context/CartContext';
import Footer from './Footer';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToCart } = useCart();
    
    const project = projectsData.find(p => p.id === parseInt(id || '0'));

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => navigate('/')} className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600">
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
    const closeImageModal = () => { setIsModalOpen(false); };
    const nextImage = () => { setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length); };
    const prevImage = () => { setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length); };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="relative pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button onClick={() => navigate(-1)} className="flex items-center text-orange-500 hover:text-orange-400 transition-colors mb-8 group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />Back to Projects
                    </button>
                    {/* UPDATED: Grid now stacks on mobile and reverses order */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
                            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">{project.detailedDescription}</p>
                            {/* UPDATED: This grid also stacks on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center"><Calendar size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Year</p><p className="font-semibold">{project.date}</p></div></div>
                                <div className="flex items-center"><Clock size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Duration</p><p className="font-semibold">{project.duration}</p></div></div>
                                <div className="flex items-center"><Users size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Team</p><p className="font-semibold">{project.team.join(', ')}</p></div></div>
                                <div className="flex items-center"><User size={20} className="mr-3 text-orange-500" /><div><p className="text-sm text-gray-400">Role</p><p className="font-semibold">{project.role}</p></div></div>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <img src={project.image} alt={project.title} className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl">
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-3xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500/30 pb-2">Key Features</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-gray-300">
                                {project.features.map((feature, index) => (<li key={index} className="pl-2">{feature}</li>))}
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-3xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500/30 pb-2">Project Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {project.gallery.map((image, index) => (
                                    <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => openImageModal(index)}>
                                        <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><ExternalLink size={24} className="text-white" /></div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className="text-3xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500/30 pb-2">Components Used</h2>
                            <div className="space-y-6">
                                {project.components.map((component: Component) => (
                                    <div key={component.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-gray-900/80 rounded-lg ring-1 ring-white/10">
                                        <img src={component.image} alt={component.name} className="w-32 h-32 object-cover rounded-md flex-shrink-0" />
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-xl font-bold text-white mb-1">{component.name}</h3>
                                            <p className="text-gray-400 mb-3">{component.description}</p>
                                            <p className="font-bold text-lg text-orange-500 mb-4">{component.price}</p>
                                            <button
                                                onClick={() => addToCart(component)}
                                                className="inline-flex items-center px-5 py-2 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105"
                                            >
                                                <ShoppingCart size={16} className="mr-2"/>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
                    <div className="relative w-full max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeImageModal} className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors z-20"><X size={30} /></button>
                        {/* UPDATED: Modal buttons are now inside the screen on mobile */}
                        <button onClick={prevImage} className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-20 bg-black/30 rounded-full p-2"><ChevronLeft size={32} /></button>
                        <button onClick={nextImage} className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-20 bg-black/30 rounded-full p-2"><ChevronRight size={32} /></button>
                        <img src={project.gallery[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} className="w-full h-full object-contain" />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-3 py-1 rounded-full"><p className="text-sm">{currentImageIndex + 1} of {project.gallery.length}</p></div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default ProjectDetails;
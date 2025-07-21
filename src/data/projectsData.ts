export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  team: string[];
  liveUrl: string;
  githubUrl: string;
  detailedDescription: string;
  features: string[];
  technologies: string[];
  
  gallery: string[];
  duration: string;
  role: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, responsive e-commerce platform built with React and Node.js, featuring advanced filtering, payment integration, and real-time inventory management.",
    image: "/public/img/img.webp  ",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    date: "2024",
    team: ["Alex", "Marcus"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "This comprehensive e-commerce platform was designed to provide a seamless shopping experience for both customers and administrators. Built with modern web technologies, it features a responsive design that works flawlessly across all devices. The platform includes advanced product filtering, secure payment processing through Stripe, real-time inventory management, and a powerful admin dashboard for managing products, orders, and customer data.",
    features: [
      "Advanced product search and filtering",
      "Secure payment processing with Stripe",
      "Real-time inventory management",
      "User authentication and profiles",
      "Shopping cart and wishlist functionality",
      "Order tracking and history",
      "Admin dashboard for product management",
      "Responsive design for all devices",
      "Email notifications for orders",
      "Multi-language support"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Stripe API", "JWT", "Tailwind CSS", "Redis", "AWS S3"],
  
    gallery: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    ],
    duration: "4 months",
    role: "Full-stack development and architecture design"
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
    githubUrl: "#",
    detailedDescription: "Our comprehensive design system serves as the foundation for all our digital products, ensuring consistency, accessibility, and scalability across multiple projects. This system includes a complete component library, design tokens, guidelines, and documentation that enables our team to build cohesive user experiences efficiently. The system is built with React and TypeScript, documented with Storybook, and designed in Figma with a focus on accessibility and usability.",
    features: [
      "I am a nerd",
      "Design tokens for colors, typography, and spacing",
      "Accessibility-first approach with WCAG 2.1 compliance",
      "Interactive documentation with Storybook",
      "Figma design kit with auto-layout components",
      "Dark and light theme support",
      "Responsive design patterns",
      "Icon library with 200+ custom icons",
      "Animation and micro-interaction guidelines",
      "Code generation tools for developers"
    ],
    technologies: ["React", "TypeScript", "Storybook", "Figma", "Styled Components", "Jest", "Chromatic", "Rollup", "ESLint", "Prettier"],

    gallery: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    ],
    duration: "6 months",
    role: "Design system architecture and component development"
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
    githubUrl: "#",
    detailedDescription: "A comprehensive personal finance management application that helps users take control of their financial health. The app provides intuitive budgeting tools, expense tracking, investment portfolio management, and financial insights through beautiful data visualizations. Built with React Native for cross-platform compatibility, it integrates with major banks through Plaid API and provides real-time financial data synchronization.",
    features: [
      "Bank account integration via Plaid API",
      "Automated expense categorization",
      "Budget creation and tracking",
      "Investment portfolio overview",
      "Bill reminders and notifications",
      "Financial goal setting and progress tracking",
      "Spending insights and analytics",
      "Secure biometric authentication",
      "Data export and reporting",
      "Multi-currency support"
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Plaid API", "Chart.js", "Redux Toolkit", "React Navigation", "Expo", "Jest", "Detox"],

    gallery: [
      "https://images.pexels.com/photos/5849574/pexels-photo-5849574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/5849575/pexels-photo-5849575.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/5849576/pexels-photo-5849576.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    ],
    duration: "5 months",
    role: "Mobile app development and API integration"
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
    githubUrl: "#",
    detailedDescription: "An innovative AI-powered content generation platform that revolutionizes how businesses create marketing materials, social media content, and copy. Leveraging advanced language models, the platform provides intelligent suggestions, generates high-quality content, and helps maintain brand consistency across all communications. The system includes templates for various content types, brand voice customization, and collaborative editing features.",
    features: [
      "AI-powered content generation for multiple formats",
      "Brand voice customization and consistency",
      "Template library for various content types",
      "Real-time collaboration and editing",
      "Content optimization suggestions",
      "Multi-language content generation",
      "SEO optimization recommendations",
      "Content calendar and scheduling",
      "Performance analytics and insights",
      "API integration for third-party tools"
    ],
    technologies: ["Python", "FastAPI", "OpenAI GPT-4", "React", "TypeScript", "PostgreSQL", "Redis", "Celery", "Docker", "AWS"],

    gallery: [
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/8386441/pexels-photo-8386441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/8386442/pexels-photo-8386442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/8386443/pexels-photo-8386443.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    ],
    duration: "3 months",
    role: "AI integration and backend development"
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
    githubUrl: "#",
    detailedDescription: "A cutting-edge real estate platform that transforms how properties are showcased and discovered. Featuring immersive 3D virtual tours, advanced search capabilities, and integrated CRM tools, this platform serves both property seekers and real estate professionals. The system includes interactive maps, detailed property analytics, and comprehensive management tools for agents and property managers.",
    features: [
      "3D virtual tours with Three.js",
      "Advanced property search and filtering",
      "Interactive maps with Mapbox integration",
      "CRM system for agents and leads",
      "Property analytics and market insights",
      "Appointment scheduling system",
      "Document management and e-signatures",
      "Mobile-responsive design",
      "Multi-language support",
      "Integration with MLS systems"
    ],
    technologies: ["Next.js", "TypeScript", "Three.js", "MongoDB", "Mapbox", "Node.js", "Socket.io", "AWS S3", "Stripe", "SendGrid"],

    gallery: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/1396135/pexels-photo-1396135.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    ],
    duration: "7 months",
    role: "Full-stack development and 3D integration"
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
    githubUrl: "#",
    detailedDescription: "A comprehensive healthcare management platform designed for healthcare providers to monitor patient health, manage appointments, and conduct telemedicine consultations. The dashboard provides real-time health data visualization, secure patient communication, and integrated video calling capabilities. Built with healthcare compliance in mind, ensuring HIPAA compliance and data security.",
    features: [
      "Real-time patient health monitoring",
      "Interactive health data visualizations",
      "Appointment scheduling and management",
      "Telemedicine video consultations",
      "Secure patient messaging system",
      "Electronic health records (EHR) integration",
      "Prescription management",
      "Health alerts and notifications",
      "Multi-provider collaboration tools",
      "Mobile companion app for patients"
    ],
    technologies: ["Vue.js", "TypeScript", "Django", "PostgreSQL", "WebRTC", "Chart.js", "Redis", "Celery", "Docker", "AWS"],

    gallery: [
      "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    ],
    duration: "8 months",
    role: "Frontend development and healthcare compliance"
  },
  {
    id: 7,
    title: "Real Estate Platform",
    description: "Modern real estate platform with virtual tours, advanced search filters, and integrated CRM system for agents and property management.",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    tags: ["Next.js", "Three.js", "MongoDB", "Mapbox"],
    date: "2023",
    team: ["Alex", "Emily"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "A cutting-edge real estate platform that transforms how properties are showcased and discovered. Featuring immersive 3D virtual tours, advanced search capabilities, and integrated CRM tools, this platform serves both property seekers and real estate professionals. The system includes interactive maps, detailed property analytics, and comprehensive management tools for agents and property managers.",
    features: [
      "3D virtual tours with Three.js",
      "Advanced property search and filtering",
      "Interactive maps with Mapbox integration",
      "CRM system for agents and leads",
      "Property analytics and market insights",
      "Appointment scheduling system",
      "Document management and e-signatures",
      "Mobile-responsive design",
      "Multi-language support",
      "Integration with MLS systems"
    ],
    technologies: ["Next.js", "TypeScript", "Three.js", "MongoDB", "Mapbox", "Node.js", "Socket.io", "AWS S3", "Stripe", "SendGrid"],

    gallery: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      "https://images.pexels.com/photos/1396135/pexels-photo-1396135.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
    ],
    duration: "7 months",
    role: "Full-stack development and 3D integration"
  }
];

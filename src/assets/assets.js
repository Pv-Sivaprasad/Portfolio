import { FaLightbulb,FaDraftingCompass , FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud,FaLayerGroup, FaPaypal, FaDocker, FaCss3 } from 'react-icons/fa';

import profileImg7 from '../assets/siva.jpg'
import projectImg1 from '../assets/Furniture.jpg';
import projectImg2 from '../assets/Hospital.jfif';
import projectImg3 from '../assets/weather.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/todo.png';
import projectImg6 from '../assets/user.jpg';


export const assets = {
 profileImg7,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  },
  {
    icon: FaDraftingCompass,
    title: 'Performance Driven',
    description: 'I focus on designing robust, scalable architectures that ensure the long-term reliability and performance of every application I build.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'TypeScript', 'Ejs', 'Hbs']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express',]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'System Design',
    icon: FaLayerGroup,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['Microservices', 'Event-Driven Architecture', 'Load Balancing', 'Caching Strategies']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS','GCP','Digital Ocean', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Nginx', 'Figma', 'Linux', 'Firebase']
  }
];



export const projects = [
  {
    title: "Hospital Management with MicroService",
    description: "Developed a scalable hospital management system using the MERN stack with a microservices architecture.",
    image: projectImg2,
    tech: ["React", "Firebase", "Tailwind CSS", "WebSockets", "Stripe", "Docker", "kubernetes", "Microservices", ],
    icons: [FaReact, FaFire, FaCloud, FaDatabase, FaStripe, FaDocker, ],
    demo: "#",
    code: "https://github.com/Pv-Sivaprasad/Renewa",
  },

  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: [ "MongoDB","Node", "Express", "Ejs", "RazorPay", "Passport"],
    icons: [ FaDatabase, FaNodeJs, FaReact, FaPaypal],
    demo: "#",
    code: "https://github.com/Pv-Sivaprasad/e-commerce-website",
  },

  {
    title: "A Weather App",
    description: "Know before you go. Unmatched accuracy for your daily forecast.",
    image: projectImg3,
    tech: ["React","Weather Api"],
    icons: [FaReact],
    demo: "https://weather-app-y2dn.onrender.com",
    code: "https://github.com/Pv-Sivaprasad/weather-app",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, experience ,contact.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion",],
    icons: [FaReact, FaCloud],
    demo: "https://portfolio-three-green-35.vercel.app/",
    code: "https://github.com/Pv-Sivaprasad/Portfolio",
  },
  {
    title: "Todo App",
    description: "Transforming to-dos into 'to-dones'. Clean, efficient task handling built from the ground up.",
    image: projectImg5,
    tech: [ "React"],
    icons: [FaReact],
    demo: "#",
    code: "https://github.com/Pv-Sivaprasad/Todo-App",
  },
  {
    title: "User Management System",
    description: "Built-in Security and Control. Developed a scalable User Management System with robust role-based access and data integrity.",
    image: projectImg6,
    tech: ["React", "Node", "Cloudinary", "Tailwind CSS", "MongoDB"],
    icons: [FaReact,FaNodeJs , FaCloud, FaCss3, FaDatabase],
    demo: "#",
    code: "https://github.com/Pv-Sivaprasad/Mern-Auth",
  }
];


export const workData = [
  {
    role: " Quality Assurance Analyst and CCE",
    company: "Teleperformance India.",
    duration: "June 2021- Jan 2023",
    description:
      "Collaborated with team leads and managers to minimize customer complaints by addressing employee-related issues.",
    color: "purple"
  },
  {
    role: "Sub Station Operator",
    company: "Kerala State Electricity Board",
    duration: "Feb-2023 - Oct 2023",
    description:
      " Ensured seamless electrical distribution by monitoring and maintaining substation operations.Analyzed power usage patterns to optimize efficiency and reliability.",
    color: "pink"
  },
  {
    role: "Social Media Specialist",
    company: "Teleperformance India",
    duration: "July 2025 - Nov 2025",
    description:
      "Bridging the gap between customers and brands on social media.",
    color: "blue"
  }
];

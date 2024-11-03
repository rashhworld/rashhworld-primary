import {
  FaLaptopCode,
  FaShoppingCart,
  FaSearch,
  FaTools,
  FaServer,
  FaCogs,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaCode,
  FaLaptop,
} from "react-icons/fa";

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

export const services = [
  {
    title: "Static Web Designing",
    description:
      "Custom-designed websites with modern UI/UX, perfect for personal portfolios and small business websites.",
    icon: <FaLaptopCode className="w-8 h-8" />,
    features: [
      "Responsive Design",
      "Modern UI/UX",
      "Fast Loading Speed",
      "Cross-browser Compatible",
    ],
    price: "5,000",
  },
  {
    title: "Dynamic Web Designing",
    description:
      "Interactive and dynamic websites with user authentication, database integration, and real-time updates.",
    icon: <FaCogs className="w-8 h-8" />,
    features: [
      "User Authentication",
      "Database Integration",
      "Real-time Updates",
      "Content Management System",
    ],
    price: "10,000",
  },
  {
    title: "Ecommerce Web Designing",
    description:
      "Full-featured online stores with secure payment integration, inventory management, and order tracking.",
    icon: <FaShoppingCart className="w-8 h-8" />,
    features: [
      "Secure Payments",
      "Inventory Management",
      "Order Tracking",
      "Shopping Cart",
    ],
    price: "15,000",
  },
  {
    title: "SEO Services",
    description:
      "Comprehensive SEO solutions to improve your website's visibility and ranking in search engines.",
    icon: <FaSearch className="w-8 h-8" />,
    features: [
      "Keyword Research",
      "On-page SEO",
      "Technical SEO",
      "Performance Optimization",
    ],
    price: "10,000",
  },
  {
    title: "Support & Extensions",
    description:
      "Ongoing support and custom extensions to enhance your website's functionality and user experience.",
    icon: <FaTools className="w-8 h-8" />,
    features: [
      "24/7 Support",
      "Custom Extensions",
      "Regular Updates",
      "Security Patches",
    ],
    price: "500",
  },
  {
    title: "Domain & Hosting Solution",
    description:
      "Complete domain and hosting solutions for your website, ensuring optimal performance and security.",
    icon: <FaServer className="w-8 h-8" />,
    features: [
      "Domain Registration",
      "Cloud Hosting",
      "SSL Certificates",
      "Daily Backups",
    ],
    price: "2,500",
  },
];

export const featuredServices = [
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites tailored to your needs",
  },
  {
    icon: <FaShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Solutions",
    description: "Online stores with secure payments",
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: "Hosting Solutions",
    description: "Reliable hosting and maintenance",
  },
];

export const projects = [
  {
    title: "Testfree",
    description:
      "An assessment platform for creating and administering tests and quizzes for the attendees.",
    image: "/assets/images/projects/testfree.webp",
    tags: [
      "React.js",
      "PHP",
      "Codeigniter",
      "MySQLi",
      "jQuery",
      "Bootstrap",
      "Tailwind",
    ],
    github: "https://github.com/rashhworld/testfree.git",
    demo: "https://testfree.in/",
  },
  {
    title: "Storystash",
    description:
      "A content creation platform where creators can log in, publish stories, and engage with their audience.",
    image: "/assets/images/projects/storystash.webp",
    tags: ["React.js", "ExpressJs", "NodeJs", "MongoDB"],
    github: "https://github.com/rashhworld/storystash-cuvette.git",
    demo: "https://storystash-cuvette.onrender.com/",
  },
  {
    title: "Formbot",
    description:
      "A platform to create and customize automated forms dynamically and collect data from users.",
    image: "/assets/images/projects/formbot.webp",
    tags: ["React.js", "ExpressJs", "NodeJs", "MongoDB"],
    github: "https://github.com/rashhworld/formbot-cuvette.git",
    demo: "https://formbot-cuvette.onrender.com/",
  },
  {
    title: "Quizzie",
    description:
      "An interactive quiz app for MCQs and polls to enhance user engagement and gather insights.",
    image: "/assets/images/projects/quizzie.webp",
    tags: ["React.js", "ExpressJs", "NodeJs", "MongoDB"],
    github: "https://github.com/rashhworld/quizzie-cuvette.git",
    demo: "https://quizzie-cuvette-x18r.onrender.com/",
  },
  {
    title: "Bitasoft",
    description:
      "A learning platform for students who keeps keen interest in technology and need complete explanatory content.",
    image: "/assets/images/projects/bitasoft.webp",
    tags: ["PHP", "Codeigniter", "MySQLi", "jQuery", "Bootstrap"],
    github: "https://github.com/rashhworld/bitasoft.git",
    demo: "https://bitasoft.in/",
  },
  {
    title: "Syrush Healthcare",
    description:
      "A platform for patients to book appointments, view medical records, and communicate with healthcare providers.",
    image: "/assets/images/projects/syrush.webp",
    tags: ["PHP", "Codeigniter", "MySQLi", "jQuery", "Bootstrap"],
    github: "https://github.com/rashhworld/syrush.git",
    demo: "https://syrushhealthcare.com/",
  },
];

export const featuredProjects = [
  {
    title: "Testfree",
    description:
      "An assessment platform for creating and administering tests and quizzes for the attendees.",
    image: "/assets/images/projects/testfree.webp",
    tags: ["React.js", "Codeigniter", "MySQLi"],
    github: "https://github.com/rashhworld/testfree.git",
    demo: "https://testfree.in/",
  },
  {
    title: "Storystash",
    description:
      "A content creation platform where creators can log in, publish stories, and engage with their audience.",
    image: "/assets/images/projects/storystash.webp",
    tags: ["React.js", "ExpressJs", "MongoDB"],
    github: "https://github.com/rashhworld/storystash-cuvette.git",
    demo: "https://storystash-cuvette.onrender.com/",
  },
  {
    title: "Formbot",
    description:
      "A platform to create and customize automated forms dynamically and collect data from users.",
    image: "/assets/images/projects/formbot.webp",
    tags: ["React.js", "ExpressJs", "MongoDB"],
    github: "https://github.com/rashhworld/formbot-cuvette.git",
    demo: "https://formbot-cuvette.onrender.com/",
  },
];

export const skills = [
  {
    category: "Frontend Development",
    icon: <FaLaptop className="w-6 h-6" />,
    technologies: [
      "HTML/CSS/JS",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    category: "Backend Development",
    icon: <FaServer className="w-6 h-6" />,
    technologies: [
      "Node.js",
      "ExpressJs",
      "MongoDB",
      "PHP",
      "Codeigniter",
      "MySQLi",
      "RESTful APIs",
    ],
  },
  {
    category: "Other Tech Skills",
    icon: <FaCode className="w-6 h-6" />,
    technologies: [
      "SEO",
      "SMO",
      "Photoshop",
      "Illustrator",
      "Filmora",
      "Git",
      "Testing",
    ],
  },
];

export const testimonials = [
  {
    name: "Sumeet Haldar",
    role: "Data Engineer, Equinix",
    content:
      "Working with RashhWorld transformed our online presence. Their attention to detail and technical expertise exceeded our expectations.",
  },
  {
    name: "Sujit Mohapatra",
    role: "Author, Bitasoft",
    content:
      "The e-commerce solution they built helped us increase our sales by 200%. Their team was professional and delivered on time.",
  },
  {
    name: "Manoj Sahoo",
    role: "Co-Founder, Syrush Health",
    content:
      "Exceptional service and outstanding results. A true understanding of modern web development and digital marketing needs which is crucial.",
  },
  {
    name: "Ravi Ranjan",
    role: "Developer, Digiprint",
    content:
      "The website perfectly captures our brand essence. We have seen a significant increase in client inquiries and sales in just 3 months.",
  },
  {
    name: "Sandeep Chandan",
    role: "Engineer, SMS Group",
    content:
      "Rashhworld technical expertise and problem-solving abilities are impressive. Complex project delivered with remarkable efficiency.",
  },
];

export const contactInfo = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    details: "rashhworld@hotmail.com",
    link: "mailto:rashhworld@hotmail.com",
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    details: "+91 7008862618",
    link: "tel:+917008862618",
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Location",
    details: "Cuttack, Odisha, 754130",
    link: "https://maps.app.goo.gl/82GgDXxccyiNQ8Mb8",
  },
];

export const socialLinks = [
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/rashhworld",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    title: "GitHub",
    url: "https://github.com/rashhworld",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    title: "Instagram",
    url: "https://www.instagram.com/rashhworld",
  },
  {
    icon: <FaYoutube className="w-5 h-5" />,
    title: "YouTube",
    url: "https://www.youtube.com/@rashhworld",
  },
];

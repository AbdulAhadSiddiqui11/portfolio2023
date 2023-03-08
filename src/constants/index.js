import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    deloitte,
    crio,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Fronend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Application Engineer",
      company_name: "Deloitte",
      icon: deloitte,
      iconBg: "#000",
      date: "July 2021 - Present",
      points: [
        "Designed, developed, tested, and managed full-stack business system solutions, spanning extraction, storage, transformation, and visualization layers.",
        "Developed an automated investment tracking application that resulted in a 66% reduction in processing time and saved over 2000 project hours per year for the investments team.",
        "Automated the metrics extraction process, resulting in a 76% increase in productivity and saving 1582 manual hours per year for the metrics team.",
        "Developed frontend web templates for multiple products, resulting in improved efficiency and productivity across the organization.",
        "Collaborated with clients and cross-functional teams to understand business needs, gather requirements, and develop customized solutions to address issues with existing systems.",
        "Managed projects in an agile environment by creating a product roadmap, maintaining the product backlog, and planning sprints and releases on Azure DevOps.",
        "Reviewed, debugged, tested, documented, and provided technical support for developed products.",
      ],
    },
    {
      title: "Information Technology Intern",
      company_name: "Deloitte",
      icon: deloitte,
      iconBg: "#000",
      date: "March 2021 - July 2022",
      points: [
        "Streamlined metrics reporting for the Ops. team by automating manual processes using Python3, resulting in a 95% reduction in manual efforts.",
        "Developed frontend components for internal products and extensively created SharePoint sites for project teams, which improved collaboration and communication.",
        "Provided high-quality technical support by troubleshooting, diagnosing, and resolving issues, ensuring seamless operations for end-users.",
      ],
    },
    {
      title: "Lead Teaching Assistant",
      company_name: "Crio.Do",
      icon: crio,
      iconBg: "#2df7c5",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Provided technical support to users during Django and REST API based product development workshops, assisting with code debugging and issue resolution.",
        "Collaborated with the systems team to identify and solve system-related issues faced by workshop participants.",
        "Managed a team of 20+ teaching assistants, ensuring consistent and high-quality support delivery.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
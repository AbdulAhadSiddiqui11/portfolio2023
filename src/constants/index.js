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
    bootstrap,
    clang,
    cpp,
    java,
    nextjs,
    python,
    sql,
    cacta,
    seed,
    abdGithub,
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
      title: "Frontend Developer",
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
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    // {
    //   name: "C",
    //   icon: clang,
    // },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
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
      date: "December 2019 - February 2020",
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
      name: "Cacta",
      description:
        "Introducing Cacta - a social media platform for creating, sharing, and discovering short videos. With modern and responsive design, Cacta offers a fully immersive user experience.",
      tags: [
        {
          name: "typescript",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cacta,
      source_code_link: "https://github.com/AbdulAhadSiddiqui11/Cacta",
      live_url: "https://cacta.abdulahadsiddiqui.com/",
    },
    {
      name: "Seed",
      description:
        "Seed is a modern blogging app designed to provide a blazing-fast user experience through static site generation and incremental static site regeneration and comes with a beautiful dark theme.",
      tags: [
        {
          name: "typescript",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "graphQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: seed,
      source_code_link: "https://github.com/AbdulAhadSiddiqui11/seed",
      live_url: "https://seed.abdulahadsiddiqui.com/",
    },
    {
      name: "My GitHub",
      description:
        "Explore all my projects on Github, ranging from web development to deep learning and web scraping. Discover my coding style, problem-solving skills, and passion for technology.",
      tags: [
        {
          name: "code-portfolio",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
        },
        {
          name: "open-source",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
      ],
      image: abdGithub,
      source_code_link: "https://github.com/AbdulAhadSiddiqui11",
      live_url: "https://github.com/AbdulAhadSiddiqui11",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    linkedin,
    github,
    python,
    java,
    konva,
    threedportfolio,
    benchmarksignal,
    karintaksi
  } from "../assets";
  
  export const navLinksEN = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const navLinksFI = [
    {
      id: "about",
      title: "Tietoa",
    },
    {
      id: "projects",
      title: "Projektit",
    },
    {
      id: "contact",
      title: "Ota yhteyttä",
    },
  ];


  const introductions = [
    {
      fi:"Olen valmistunut tietojenkäsittelytieteen kandidaatti Itä-Suomen Yliopistosta. Haen työpaikkaa ohjelmistokehityksestä, jotta voin suorittaa maisteritutkinnon harjoittelun ja valmistua maisteriksi. Hallitsen ohjelmointikielet kuten JavaScriptin, Javan ja Pythonin. Olen viimeaikoina erityisesti opetellut web-kehitystä ja haluaisin hyödyntää taitojani harjoittelupaikassa ohjelmistokehityksessä. Harjoittelupaikan saaminen antaisi minulle mahdollisuuden hankkia käytännön kokemusta ja osallistua todellisiin projekteihin. Voit ottaa minuun yhteyttä sähköpostitse osoitteesta anttoni.tornikoski@gmail.com tai käyttämällä alla olevaa lomaketta.",
      en: "I am a graduate from the University of Eastern Finland with a Bachelor's degree in Computer Science.  I am looking for a job in software development to be able to get my internship done required by my masters degree. I am proficient in programming languages like JavaScript, Java and Python. I'm passionate about web-development and eager to leverage my skills in a challenging internship in software development. Obtaining an internship would allow me to gain practical experience and contribute to a real-world project and I would be able to aquire my Master's degree. You can contact me with my email: anttoni.tornikoski@gmail.com or with the contact form below."
    }
  ]

  
  
  const services = [
    {
      title: "LinkedIN",
      icon: linkedin,
      href: "https://www.linkedin.com/in/anttoni-tornikoski-0b18572b5/"
    },
    {
      title: "GitHub",
      icon: github,
      href: "https://github.com/anttont"
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Konva",
      icon: konva,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "3D-portfolio",
      descriptionEN:
        "I wanted to learn ThreeJS and making a portfolio using it seemed like the best option to gain knowledge of the library and simultaneously gain experience using React and Tailwind",
        descriptionFI:
        "Halusin opetalla käyttämään ThreeJS kirjastoa, joten portfolion tekeminen sitä käyttäen tuntui sopivalta vaihtoehdolta. Portfoliota tehdessäni opin käyttämään ThreeJS kirjastoa, sekä sain ylimääräistä kokemusta Reactin ja Tailwindin käytöstä.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: threedportfolio,
      source_code_link: "https://github.com/anttont/3D-portfolio/",
      website_link: "https://anttonitornikoski.com"
    },
    {
      name: "Signal analyzer",
      descriptionEN:
        "A signal analysis tool developed for a master's level university course. While creating the tool, I learned a lot about Python and its libraries such as Pandas, Dask, Matplotlib, NumPy, SciPy, and PyWavelets.",
        descriptionFI:
        "Yliopiston maisteritason kurssia varten tehty signaalin analysointi työkalu. Työkalua tehdessä opin paljon pythonista ja sen kirjastoista kuten Pandas, Dask, Matplotlib, NumPy, SciPy, ja PyWavelets.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
        {
          name: "Dask",
          color: "blue-text-gradient",
        },
      ],
      image: benchmarksignal,
      source_code_link: "https://github.com/anttont/Signal-analyzer/",
      website_link: "https://github.com/anttont/Signal-analyzer/"
    },
    {
      name: "Karin taksit",
      descriptionEN:
        "A homepage for a taxi business made using React and hosted on Firebase.",
        descriptionFI:
        "Kotisivusto taksiyritykselle tehty käyttäen Reactia ja hostattu Firebasessa.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: karintaksi,
      source_code_link: "https://github.com/anttont/TaxiWebsite",
      website_link: "https://tornikoski.fi"
    }
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects, introductions };
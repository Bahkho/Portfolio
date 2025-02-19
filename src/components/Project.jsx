import React from "react";
import Swal from "sweetalert2";
// import collegePortfolio from "../assets/collegePortfolio.png";
import dataFinance from "../assets/dataFinance.png";
import memeGenerator2 from "../assets/memeGenerator2.png";
import routing from "../assets/routing.png";
import tenzies from "../assets/tenzies.png";
import codingFacts from "../assets/codingFacts.png";
import todoApp from "../assets/todo-app.png";

const Project = (props) => {
  const projects = [
    {
      id: 7,
      src: todoApp,
      demo: "https://todo-app-bahkho.vercel.app/",
      code: "https://github.com/Bahkho/Todo-App.git",
      title: "To-Do App",
      shortDescription: "A simple task manager built with React.js...",
      fullDescription: `
    
    <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Project Overview</h2>
    <p style="margin-bottom: 15px;">
        The <strong>To-Do App</strong> is a task management application designed to help users organize and track their daily activities efficiently. 
        The app allows users to add, edit, delete, and mark tasks as completed. I built this project to enhance my understanding of front-end development, 
        state management, and CRUD (Create, Read, Update, Delete) operations.
    </p>

    <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Development Process</h2>
    <ul style="margin-bottom: 15px; padding-left: 20px; text-align: left; list-style-type: disc;">
        <li><strong>Developed using React.js</strong> for the frontend to create a dynamic user interface.</li>
        <li><strong>Implemented local storage</strong> to persist tasks even after page reloads.</li>
        <li><strong>Used React hooks (useState, useEffect)</strong> for state management.</li>
        <li><strong>Styled with CSS & Tailwind CSS</strong> to ensure a clean and responsive UI.</li>
    </ul>

    <p style="margin-bottom: 15px;">
        One of the main challenges I faced was ensuring real-time updates for task management without performance lag.
        I tackled this by optimizing state updates and minimizing unnecessary re-renders.
    </p>

    <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Lessons Learned</h2>
    <ul style="padding-left: 20px; text-align: left; list-style-type: disc;">
        <li>Improved my <strong>React.js</strong> skills, particularly in state management and event handling.</li>
        <li>Learned how to optimize <strong>local storage</strong> for data persistence.</li>
        <li>Strengthened my UI/UX design skills by creating an intuitive and user-friendly interface.</li>
        <li>If I were to redo this project, I would implement Firebase or a backend database to allow user authentication and multi-device synchronization.
        </li>
    </ul>
      `,
    },
    {
      id: 1,
      src: tenzies,
      demo: "https://tenzies-game-01.netlify.app",
      code: "https://github.com/Bahkho/tenziesGame.git",
      title: "Tenzies Game",
      shortDescription: "An interactive dice game built with React...",
      fullDescription: `
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Project Overview</h2>
          <p style="margin-bottom: 15px;">
        The <strong>Tenzies Game</strong> is a simple yet engaging dice game where players roll dice until all dice show the same number. 
        This project was an exciting challenge as it involved game logic development, state management, and interactive UI design.</p>

        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Development Process</h2>
      <ul style="margin-bottom: 15px; padding-left: 20px; text-align: left; list-style-type: disc;">
          <li><strong>Built using React.js</strong> to handle dynamic UI updates.</li>
          <li>Used <strong>useState & useEffect</strong> hooks to manage dice states.</li>
          <li>Implemented random number generation to simulate rolling dice.</li>
          <li>Created a visually appealing UI with <strong>CSS and Tailwind CSS</strong>.</li>
        </ul>

           <p style="margin-bottom: 15px;">
        A significant challenge was implementing the logic to determine when the game is won. Initially, I struggled with efficiently checking whether all dice showed the same number. I solved this by using an array comparison function that continuously checks for uniformity after each roll.
    </p>

          <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Lessons Learned</h2>
    <ul style="padding-left: 20px; text-align: left; list-style-type: disc;">
          <li>Improved state management in React.</li>
          <li>Learned how to handle user interactions efficiently.</li>
          <li>Strengthened problem-solving skills for game logic optimization.</li>
          <li>Future improvement: Adding leaderboards and user authentication for competitiveness.</li>
        </ul>
      `,
    },
    {
      id: 4,
      src: dataFinance,
      demo: "https://data-finance-01.netlify.app/",
      code: "https://github.com/Bahkho/React-Tailwind.git",
      title: "Data Finance",
      shortDescription: "A finance dashboard displaying real-time market data...",
      fullDescription: `
  <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Project Overview</h2>
    <p style="margin-bottom: 15px;">
        <strong>Data Finance</strong> is a web-based platform that provides insights into financial trends, data visualization, and resources for financial literacy. This project was designed to help users make data-driven financial decisions by providing real-time analytics and educational content.
    </p>

    <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Development Process</h2>
    <ul style="margin-bottom: 15px; padding-left: 20px; text-align: left; list-style-type: disc;">
        <li>Developed using <strong>Next.js</strong> for improved performance and SEO optimization.</li>
        <li>Integrated <strong>Chart.js</strong> for interactive financial data visualization.</li>
        <li>Used <strong>REST APIs</strong> to fetch and display real-time financial market data.</li>
        <li>Designed an engaging UI with <strong>Tailwind CS</strong> to ensure responsiveness.</li>
    </ul>

    <p style="margin-bottom: 15px;">
       One of the key challenges was handling large amounts of real-time financial data without slowing down the website. To overcome this, I optimized API calls using server-side rendering (SSR) and caching techniques in Next.js.
    </p>

    <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Lessons Learned</h2>
    <ul style="padding-left: 20px; text-align: left; list-style-type: disc;">
       <li>Improved my skills in <strong>data visualization</strong> and working with APIs.</li>
  <li>Gained experience in <strong>Next.js</strong> and server-side rendering for performance optimization.</li>
  <li>Strengthened my ability to <strong>work with real-time data</strong> while ensuring a smooth user experience.</li>
  <li>If I were to extend this project, I would add <strong>user authentication</strong> and personalized dashboards for a more customized experience.</li>

    </ul>
      `,
    },
    {
      id: 5,
      src: codingFacts,
      demo: "https://coding-fun-facts.netlify.app",
      code: "https://github.com/Bahkho/Coding-Facts.git",
      title: "Coding Facts",
      shortDescription: "A web app that shares fun coding facts...",
      fullDescription: `
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Project Overview</h2>
        <p style="margin-bottom: 15px;">
            <strong>Coding Facts</strong> is a fun and interactive web application designed to educate users with interesting programming-related facts. 
            The goal was to create an engaging, visually appealing, and informative project that would allow users to learn new things about coding in a simple and entertaining way.
            I built this project in early 2024 as a way to refine my skills in dynamic UI development and working with structured data.
        </p>
    
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Development Process</h2>
        <ul style="margin-bottom: 15px; padding-left: 20px; text-align: left; list-style-type: disc;">
            <li>Developed using <strong>React.js</strong> for efficient component-based UI design.</li>
            <li>Used <strong>JSON data</strong> to store and display coding facts dynamically.</li>
            <li>Implemented <strong>Tailwind CSS</strong> to create a modern, responsive, and visually appealing layout.</li>
            <li>Added interactivity through event handling, allowing users to cycle through facts with button clicks.</li>
        </ul>
    
        <p style="margin-bottom: 15px;">
            One of the main challenges I faced was ensuring that facts were displayed in a structured, readable format while keeping the interface intuitive and engaging.
            I solved this by implementing a simple state management system using <strong>useState</strong>, which allowed users to navigate through facts seamlessly.
        </p>
    
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Lessons Learned</h2>
        <ul style="padding-left: 20px; text-align: left; list-style-type: disc;">
            <li>Strengthened my understanding of <strong>React.js state management</strong> and handling user interactions.</li>
            <li>Gained experience in <strong>displaying structured data dynamically</strong> in a user-friendly format.</li>
            <li>Enhanced my <strong>UI/UX design skills</strong> by creating a clean and visually appealing layout with Tailwind CSS.</li>
            <li>If I were to improve this project, I would integrate an <strong>API</strong> to fetch real-time coding facts and allow users to submit their own facts.</li>
        </ul>
      `,
    },
    {
      id: 3,
      src: routing,
      demo: "https://web-routing-app.netlify.app",
      code: "https://github.com/Bahkho/React-Router.git",
      title: "React Routing App",
      shortDescription: "A project demonstrating React Router for navigation...",
      fullDescription: `
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Project Overview</h2>
        <p style="margin-bottom: 15px;">
            The <strong>React Routing App</strong> is a web application that demonstrates the implementation of client-side routing using React Router.
            I built this project to deepen my understanding of navigation in single-page applications (SPAs).
            The app provides a seamless experience where users can navigate between different pages without full-page reloads.
        </p>
    
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Development Process</h2>
        <ul style="margin-bottom: 15px; padding-left: 20px; text-align: left; list-style-type: disc;">
            <li>Developed using <strong>React.js</strong> to create a single-page application with multiple views.</li>
            <li>Implemented <strong>React Router</strong> to manage navigation between different pages.</li>
            <li>Used <strong>Nested Routes</strong> to structure different sections efficiently.</li>
            <li>Styled with <strong>Tailwind CSS</strong> for a clean and responsive design.</li>
        </ul>
    
        <p style="margin-bottom: 15px;">
            One of the challenges was handling dynamic routing and ensuring that the navigation worked smoothly across different page reloads.
            I resolved this by properly configuring React Router’s <strong>useNavigate</strong> and setting up route parameters.
        </p>
    
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Lessons Learned</h2>
        <ul style="padding-left: 20px; text-align: left; list-style-type: disc;">
            <li>Enhanced my understanding of <strong>React Router</strong> and SPA navigation.</li>
            <li>Gained experience in <strong>working with nested routes</strong> and managing route parameters.</li>
            <li>Improved my ability to create <strong>responsive and user-friendly navigation systems.</strong></li>
            <li>Future improvements: Implementing authentication-based routing to restrict access to certain pages.</li>
        </ul>
      `,
    },
    {
      id: 6,
      src: memeGenerator2,
      demo: "https://meme-generator-00.netlify.app",
      code: "https://github.com/Bahkho/memeGenerator.git",
      title: "Meme Generator",
      shortDescription: "A fun meme generator built with React...",
      fullDescription: `
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Project Overview</h2>
        <p style="margin-bottom: 15px;">
            <strong>Meme Generator</strong> is a dynamic web application that allows users to generate custom memes by selecting an image and adding text overlays. 
            I built this project in 2023 as a fun way to explore API integration, event handling, and state management in React.
            The primary goal was to create a simple yet engaging application that lets users generate memes effortlessly.
        </p>
    
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Development Process</h2>
        <ul style="margin-bottom: 15px; padding-left: 20px; text-align: left; list-style-type: disc;">
            <li>Developed using <strong>React.js</strong> to create a dynamic and interactive UI.</li>
            <li>Integrated an external <strong>Meme API</strong> to fetch random meme templates.</li>
            <li>Used <strong>React state management (useState)</strong> to dynamically update text overlays.</li>
            <li>Implemented <strong>CSS and Flexbox</strong> to ensure responsive layout and proper text alignment.</li>
        </ul>
    
        <p style="margin-bottom: 15px;">
            One of the main challenges I faced was ensuring that text overlays adapted properly to different screen sizes.
            I tackled this by dynamically adjusting font sizes and positioning based on the image dimensions.
        </p>
    
        <h2 style="margin-bottom: 10px; font-size: 20px; font-weight: bold;">Lessons Learned</h2>
        <ul style="padding-left: 20px; text-align: left; list-style-type: disc;">
            <li>Gained hands-on experience with <strong>React state management</strong> and controlled components.</li>
            <li>Learned how to <strong>integrate third-party APIs</strong> to fetch and manipulate external data.</li>
            <li>Improved my <strong>CSS layout skills</strong> to ensure text overlays remained responsive.</li>
            <li>If I were to enhance this project, I would add a feature allowing users to <strong>upload their own images</strong> and share memes directly on social media.</li>
        </ul>
      `,
    },
    //    {
    //   id: 6,
    //   src: collegePortfolio,
    //   demo: "https://abdul-portfolio-site.netlify.app/index.html",
    //   code: "https://github.com/Bahkho/e-portfolio-WEBD1000.git",
    // },
    
  ];

  const handleShowMore = (title, fullDescription) => {
    Swal.fire({
      title: `<h3 style='color: #14b8a6'>${title}</h3>`,
      // html: `<p style='font-size: 16px; color: #fff;'>${fullDescription.replace(/\\n/g, '<br/>')}</p>`,
      html: fullDescription,
      icon: "info",
      confirmButtonText: "Close",
      confirmButtonColor: "#14b8a6",
      background: "#1e293b",
      color: "#fff",
      customClass: {
        popup: "rounded-xl shadow-lg",
      },
    });
  };

  return (
    <div name="projects" className={props.mode ? "" : "dark"}>
      <div className="w-full text-black dark:text-white">
        <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center">
          <div className="pb-8">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              Projects
            </p>
            <p className="py-6">Check out some of my works right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 sm:px-0">
            {projects.map(({ id, src, demo, code, title, shortDescription, fullDescription }) => (
              <div
                key={id}
                className="shadow-lg shadow-[#e2e8f0] dark:shadow-gray-600 rounded-lg p-4"
              >
                <a href={demo} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={title}
                    className="rounded-md duration-200 hover:scale-105 w-[700px] h-[300px]"
                  />
                </a>
                
                <h3 className="text-xl font-semibold mt-4">{title}</h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{shortDescription}</p>
                <button
                  onClick={() => handleShowMore(title, fullDescription)}
                  className="text-teal-600 text-sm underline mt-1"
                >
                  Show more...
                </button>

                <div className="flex items-center justify-center mt-4">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-500 hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4">
                      Demo
                    </button>
                  </a>
                  <a href={code} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-500 hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

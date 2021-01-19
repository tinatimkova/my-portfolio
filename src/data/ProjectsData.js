// import video0 from '../videos/video-0.webm'
import video1 from '../videos/video-1.webm';
import video2 from '../videos/video-2.webm';
import video7 from '../videos/video-7.webm';
import video4 from '../videos/video-4.webm';
import video5 from '../videos/video-5.webm';
import video6 from '../videos/video-6.webm';

export const projects = [
  {
    title: 'Cakes, Treats & Crafts',
    focus: 'MERN',
    deployed: 'https://cakestreatscrafts.com/#/',
    repo: '',
    video: video6,
    description: [
      'E-commerce website for a bakery shop',
      'collaborated with UX designers and other developers in an agile team',
      'used MongoDB, Express.js, React.js, Node.js, AWS',
    ],
  },
  {
    title: 'Fyyur',
    focus: 'Web API with Python and Flask',
    deployed: 'https://evening-inlet-65278.herokuapp.com/',
    repo: 'https://github.com/tinatimkova/fyyur-flask-api',
    video: video5,
    description: [
      'Fyyur is a platform where artists and musical venues can find each other',
      'built out the data models and model interactions to be able to store, retrieve and update data from a PostgreSQL database',
      'used Python3, Flask, SQLAlchemy, PostgreSQL, Jinja2',
    ],
  },
  {
    title: 'ExpTracker',
    focus: 'React.js',
    deployed: 'https://tinatimkova.github.io/expenses-tracker-client',
    repo: 'https://github.com/tinatimkova/expenses-tracker-client',
    video: video4,
    description: [
      'created a full-stack single-page application aimed to help users to keep track of their expenses',
      'built a custom API that orders all expenses by categories and filters them by date',
      'used React, JSX, Bootstrap, Ruby on Rails',
    ],
  },
  // {
  //   title: 'Survey Builder',
  //   focus: 'Teamwork and Collaboration',
  //   deployed: 'https://team-grilled-cheese.github.io/front-end/',
  //   repo: 'https://github.com/team-grilled-cheese/front-end',
  //   video: video3,
  //   description: [
  //     'collaborated with three web-developers to create an app utilizing agile scrum methodology',
  //     'built an application that allows users to create custom surveys and collect responses',
  //     'used JavaScript, jQuery, HTML, Bootstrap, Express, MongoDB, GitHub project board',
  //   ],
  // },
  {
    title: 'The Shoppies',
    focus: 'React Context API',
    deployed: 'https://tinatimkova.github.io/movie-challenge/',
    repo: 'https://github.com/tinatimkova/movie-challenge',
    video: video7,
    description: [
      'built an app to help users search for their favorite movies and add them to the nomination list',
      'implemented Context to share data between React components',
      'used React, a third party API',
    ],
  },
  {
    title: 'My Dining List',
    focus: 'Ruby on Rails',
    deployed: 'https://tinatimkova.github.io/restaurants-client/',
    repo: 'https://github.com/tinatimkova/restaurants-client',
    video: video2,
    description: [
      'developed a full-stack single-page application allowing users to create personal list of dining spots',
      'built Rails API with CRUD capabilities',
      'used JavaScript, jQuery, HTML, CSS, Bootstrap, Ruby on Rails',
    ],
  },
  {
    title: 'Tic-Tac-Toe',
    focus: 'SPA, Game Logic',
    deployed: 'https://tinatimkova.github.io/tic-tac-toe-client/',
    repo: 'https://github.com/tinatimkova/tic-tac-toe-client',
    video: video1,
    description: [
      'created a browser-based game for a single player with user authentication',
      'wrote a custom game engine, used AJAX for interacting with a third party API',
      'used JavaScript, jQuery, HTML, CSS, Bootstrap',
    ],
  },
];

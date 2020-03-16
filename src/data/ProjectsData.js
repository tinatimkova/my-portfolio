// import video0 from '../videos/video-0.webm'
import video1 from '../videos/video-1.webm';
import video2 from '../videos/video-2.webm';
import video3 from '../videos/video-3.webm';
import video4 from '../videos/video-4.webm';

export const projects = [
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
  {
    title: 'Survey Builder',
    focus: 'Teamwork and Collaboration',
    deployed: 'https://team-grilled-cheese.github.io/front-end/',
    repo: 'https://github.com/team-grilled-cheese/front-end',
    video: video3,
    description: [
      'collaborated with three web-developers to create an app utilizing agile scrum methodology',
      'built an application that allows users to create custom surveys and collect responses',
      'used JavaScript, jQuery, HTML, Bootstrap, Express, MongoDB, GitHub project board',
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

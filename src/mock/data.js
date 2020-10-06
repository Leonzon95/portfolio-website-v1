import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leonardo Briones | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Leonardo',
  subtitle: `I'm a Full Stack Web Developer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'leonardoBrionesImg.jpg',
  paragraphOne:
    'Full Stack developer with a passion for problem solving, building and learning. Experienced in Ruby on Rails and JavaScript based programming. Thrive in fast paced environments that require constant learning and growing. Possess strong skills in communication, teamwork, and learning on the fly. Always ready to take on new challenges',
  paragraphTwo: 'Skills: React.js, Redux.js, Rails, Javascript, Ruby, Sinatra, SQL, HTML, CSS, Git',
  paragraphThree: 'Other Interests: Guitar, Fitness, Comedy',
  resume: 'https://drive.google.com/file/d/1vg23H2DXKxrCjCu1cUWnI6Yx7rC7guIE/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cleansscreenshot.PNG',
    title: 'Cleans',
    info:
      'This app helps people hire someone to do a cleaning job, and it helps people find cleaning jobs. It allows for 2 types of users, regular users and cleaner users. Regular users can post cleaning jobs and hire someone for the job. Cleaners can apply to jobs and complete jobs if they get hired.',
    info2:
      'This project was built with: React.js, Redux.js, Ruby on Rails, HTML, Bootstrap, and CSS.',
    url: 'https://youtu.be/pgCeKdHqm8M',
    repo: 'https://github.com/Leonzon95/cleans-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chorematescreenshot.PNG',
    title: 'ChoreMates',
    info:
      'This app helps people create, schedule, and organize chores between everyone living in a house.',
    info2:
      'This propject was built with: Vanilla Javascript, Ruby on Rails, HTML, Bootstrap , and CSS.',
    url: 'https://youtu.be/BPf0HI6M-ig',
    repo: 'https://github.com/Leonzon95/choremates-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'workoutbuddyscreenshot.PNG',
    title: 'Workout Buddy',
    info:
      'This app allows users to create their own workouts and add them to their schedule. Users can also share their workouts, so other users can add them to their calendar.',
    info2: 'This propject was built with: Ruby on Rails, HTML, Bootstrap , and CSS.',
    url: 'https://youtu.be/6Hks574rYLA',
    repo: 'https://github.com/Leonzon95/workout-buddy', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me',
  email: 'leobrionesherrera@gmail.com',
};

// FOOTER DATA color: #333
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Leonzon95',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leonardo-briones/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

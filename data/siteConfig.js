module.exports = {
  siteTitle: 'Hi! I\'m Murillo Welsi!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Murillo Welsi',
  twitterUsername: 'murillowelsi  ',
  githubUsername: 'murillowelsi',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Quality Assurance Analyst, passionate about what I do. Always interested in how I can improve my testing techniques. I also like DevOps culture, Cloud platforms and Infrastructure tools.<br />
    In 2017, I started working as a QA Analyst and never stopped.<br />
    In 2019, I got the CTFL (Certified Tester Foundation Level) certification, recognized worldwide.<br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.<br /><br />
    Hobbies: Music and Triathlon </strong>`,
  skills: [
    {
      name: 'Ruby',
      level: 70
    },
    {
      name: 'APIs',
      level: 90
    },
    {
      name: 'BDD',
      level: 100
    },
    {
      name: 'Automated Tests',
      level: 70
    },
    {
      name: 'Postman',
      level: 100
    },
    {
      name: 'Git',
      level: 90
    }
  ],
  jobs: [
    {
      company: "Sensedia",
      begin: {
        month: 'dec',
        year: '2019'
      },
      duration: null,
      occupation: "Quality Assurance Analyst",
      description: "Created accurate and efficient test scripts using Java/REST Assured/JUnit to execute and manage automated testing of client APIs.<br />Created Continuous Integration environment using Jenkins, in order to keep tests running in every new commit from developers, enabling continuous testing and increasing the speed of testing."
  
    }, {
      company: "Viceri",
      begin: {
        month: 'aug',
        year: '2019'
      },
      duration: '4 mos',
      occupation: "Quality Assurance Analyst",
      description: "Introduced the BDD approach, with the goal of fostering collaboration between business experts and technical teams, removing gaps in understanding between the team, and producing living documentation that guides development through the behavior that software should have. Created the first test scripts using Ruby/Capybara/Rspec/Cucumber stack to run and manage web application automated testing, validating UI and APIs, reducing regression and confirmation tests time from 4 hours to 1 minute per API. Created performance test scripts using JMeter, in order to send large number of requests in the developed APIs, simulating events like Black Friday. Development and delivery to the client of API request collections, so that they could perform user acceptance testing on the product."
    }, {
      company: "Kikker",
      begin: {
        month: 'may',
        year: '2019'
      },
      duration: '3 mos',
      occupation: "Quality Assurance Analyst",
      description: "Created integration scripts using Ruby and Shell Scripts to automatically collect data from client databases (SQL Server, MySQL, Oracle and Postgres). Wrote and optimized test cases to maximize success of manual software testing with consistent, thorough approaches. Collaborated with developers and product owners to stay current on product features and intended functionality."
  
    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/murillowelsi",
    linkedin: "https://www.linkedin.com/in/murillowelsi",
    github: "https://github.com/murillowelsi",
    email: "murillo.welsi@gmail.com"
  },
  siteUrl: 'https://murillowelsi.github.io/gatsby-resume',
  pathPrefix: '/gatsby-resume', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Murillo Welsi',
      url: '/',
    }
  ]
}
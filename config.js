// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Nick',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'High School',
      icon: 'trello',
      link: 'https://idp.ncedcloud.org/idp/AuthnEngine#/authn',
    },
    {
      id: '4',
      name: 'College',
      icon: 'trello',
      link: 'https://idp.cpcc.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s1',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
 // firstListIcon: 'music',
 // secondListIcon: 'coffee',

  // Links
 // lists: {
   // firstList: [
     // {
       // name: 'Inspirational',
       // link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     // },
     // {
       // name: 'Classic',
       // link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     // },
     // {
       // name: 'Oldies',
       // link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      //},
      //{
       // name: 'Rock',
       // link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     // },
   // ],
   // secondList: [
     // {
     //   name: 'Linkedin',
      //  link: 'https://linkedin.com/',
     // },
     // {
       // name: 'Figma',
       // link: 'https://figma.com/',
     // },
     // {
       // name: 'Dribbble',
       // link: 'https://dribbble.com',
     // },
     // {
       // name: 'Telegram',
       // link: 'https://webk.telegram.org',
     // },
   // ],
  },
};

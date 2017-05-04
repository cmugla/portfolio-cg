const db = [
  {
    title: "Simon",
    desc: "memory game w/ audio",
    thumbnailSrc: "src/client/assets/simon-screenshot-2-crop.png",
    tech: "jQuery &amp; synth",
    limits: "best played in Chrome",
    links: [
      {
        url: "https://github.com/cmugla/simon-game",
        text: "See some code",
      },
      {
        url: "http://cmugla.github.io/simon-game/simon/",
        text: "Play Game (hint: extra fun for large desktop monitors! Wait for it...)",
        goTo: true,
      }
    ],
  }, {
    title: "'Hood Guide",
    desc: "web app for those who just moved",
    thumbnailSrc: "src/client/assets/hood-guide-crop.png",
    tech: "Javascript, NodeJs, EJS, MongoDB, NYTimes API, Yelp API, Eventful API",
    limits: "best to use Chrome to open",
    links: [
      {
        url: "https://github.com/cmugla/hood_guide",
        text: "See some code",
      },
      {
        url: "https://hood-guide.herokuapp.com/",
        text: "Open App",
        goTo: true,
      }
    ],
    subGallery: [
      {
        image: 'src/client/assets/hoodguide.png',
        desc: 'Homepage',
      },
      {
        image: 'src/client/assets/hoodguide-page.png',
        desc: `'Hood page`,
      },
      {
        image: 'src/client/assets/hoodguide-profile.png',
        desc: 'Profile page'
      }
    ],
  }, {
    title: "Do you like it, Kanye?",
    desc: "web app for musicians who may question his opinion",
    thumbnailSrc: "src/client/assets/kanye-crop.png",
    tech: "Ruby on Rails, jQuery, Kanye REST Counter API",
    limits: "best to use in Chrome",
    links: [
      {
        url: "https://github.com/cmugla/approve-me-kanye",
        text: "See the code",
      },
      {
        url: "https://like-it-kanye.herokuapp.com/",
        text: "Open App",
        goTo: true,
      }
    ],
    subGallery: [
      {
        image: 'src/client/assets/kanye.png',
      },
      {
        image: 'src/client/assets/kanye-disapproves.png',
      },
      {
        image: 'src/client/assets/kanye-sorta-approves.png',
      },
      {
        image: 'src/client/assets/kanye-psyched.png',
      },
      {
        image: 'src/client/assets/kanye-feed.png',
      }
    ],
  }, {
    title: "Find Local, NY",
    desc: "iOS app for finding farmer's markets in NY",
    thumbnailSrc: "src/client/assets/farmer-crop.png",
    tech: "React Native, Nativebase, NodeJs, PSQL, NY Farmer's Markets API",
    limits: "Not up on the app store, yet",
    links: [
      {
        url: "https://github.com/cmugla/farmers-markt-finder",
        text: "See some code"
      }
    ],
    subGallery: [
      {
        image: 'src/client/assets/farmer-home.png',
        desc: 'Homepage'
      },
      {
        image: 'src/client/assets/farmer-guest-search.png',
        desc: 'As a guest, the main feed of markets with an option for searching by zip code'
      },
      {
        image: 'src/client/assets/farmer-guest-posts.png',
        desc: 'When "Show More" is clicked, the posts made by Farmers are shown'
      },
      {
        image: 'src/client/assets/farmer-login.png',
        desc: 'Farmers can login'
      },
      {
        image: 'src/client/assets/farmer-feed.png',
        desc: 'If a Farmer is registered at a market, that markets feed is shown in "Feed"'
      },
      {
        image: 'src/client/assets/farmer-post.png',
        desc: 'Farmers can post updates about any specials they are bringing to their stand'
      },
      {
        image: 'src/client/assets/farmer-search.png',
        desc: `If a Farmer wants to find any other farmer's markets, they can search`
      },
      {
        image: 'src/client/assets/farmer-profile.png',
        desc: `A Farmer's profile shows the Market they belong to and their most recent posts`
      }
    ],
    subGalleryClass: 'farmer',
  }, {
    title: "Curious Canuck",
    desc: "web app for Canadian explorers",
    thumbnailSrc: "src/client/assets/CuriousCanuck_header.png",
    tech: "Javascript, NodeJS, ReactJS, PSQL, Tugo API",
    limits: "Best used in Chrome",
    links: [
      {
        url: "https://github.com/curious-canuck/curious-canuck-app",
        text: "See some code"
      }, {
        url: "https://curious-canuck.herokuapp.com/",
        text: "Open App",
        goTo: true,
      }
    ],
    subGalleryId: [
      {
        image: 'src/client/assets/CuriousCanuck_Home.png',
        desc: 'Homepage'
      },
      {
        image: 'src/client/assets/CuriousCanuck_SearchResult.png',
        desc: 'Search, as a guest'
      },
      {
        image: 'src/client/assets/CuriousCanuck_User.png',
        desc: 'Search and comment, as a user'
      },
    ],
  }
]

// const subGallery = {
//   'curious-canuck': {
//     data: [
//       {
//         image: 'src/client/assets/CuriousCanuck_Home.png',
//         desc: 'Homepage'
//       },
//       {
//         image: 'src/client/assets/CuriousCanuck_SearchResult.png',
//         desc: 'Search, as a guest'
//       },
//       {
//         image: 'src/client/assets/CuriousCanuck_User.png',
//         desc: 'Search and comment, as a user'
//       },
//     ]
//   },
//   'farmers-markt-finder': {
//     data: [
//       {
//         image: 'src/client/assets/farmer-home.png',
//         desc: 'Homepage'
//       },
//       {
//         image: 'src/client/assets/farmer-guest-search.png',
//         desc: 'As a guest, the main feed of markets with an option for searching by zip code'
//       },
//       {
//         image: 'src/client/assets/farmer-guest-posts.png',
//         desc: 'When "Show More" is clicked, the posts made by Farmers are shown'
//       },
//       {
//         image: 'src/client/assets/farmer-login.png',
//         desc: 'Farmers can login'
//       },
//       {
//         image: 'src/client/assets/farmer-feed.png',
//         desc: 'If a Farmer is registered at a market, that markets feed is shown in "Feed"'
//       },
//       {
//         image: 'src/client/assets/farmer-post.png',
//         desc: 'Farmers can post updates about any specials they are bringing to their stand'
//       },
//       {
//         image: 'src/client/assets/farmer-search.png',
//         desc: `If a Farmer wants to find any other farmer's markets, they can search`
//       },
//       {
//         image: 'src/client/assets/farmer-profile.png',
//         desc: `A Farmer's profile shows the Market they belong to and their most recent posts`
//       }
//     ]
//   },
//   'approve-me-kanye': {
//     data: [
//       {
//         image: 'src/client/assets/kanye.png',
//       },
//       {
//         image: 'src/client/assets/kanye-disapproves.png',
//       },
//       {
//         image: 'src/client/assets/kanye-sorta-approves.png',
//       },
//       {
//         image: 'src/client/assets/kanye-psyched.png',
//       },
//       {
//         image: 'src/client/assets/kanye-feed.png',
//       }
//     ]
//   },
//   'hood-guide': {
//     data: [
//       {
//         image: 'src/client/assets/hoodguide.png',
//         desc: 'Homepage',
//       },
//       {
//         image: 'src/client/assets/hoodguide-page.png',
//         desc: `'Hood page`,
//       },
//       {
//         image: 'src/client/assets/hoodguide-profile.png',
//         desc: 'Profile page'
//       }
//     ]
//   }
// }

export default db

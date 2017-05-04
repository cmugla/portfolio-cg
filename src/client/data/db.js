const db = {
  side_projects: [
    {
      title: "Simon",
      parent: "side-projects",
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
      parent: "side-projects",
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
      parent: "side-projects",
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
      parent: "side-projects",
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
      parent: "side-projects",
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
    },
  ],
  "recent": [
    {
      title: "Flowers on the Vineyard",
      desc: "design &amp; build",
      thumbnailSrc: "src/client/assets/fotv.png",
      links: [
        {
          url: "http://flowersonthevineyard.com",
          goTo: true,
        }
      ],
      parent: "recent",
    }, {
      title: "Aquamarine Dockbuilders",
      desc: "design &amp; build",
      thumbnailSrc: "src/client/assets/aquadock.png",
      links: [
        {
          url: "http://aquadockmv.com",
          goTo: true,
        }
      ],
      parent: "recent",
    }, {
      title: "MV Spearpoints",
      desc: "design &amp; build",
      subDesc: "collaboration with raglan",
      thumbnailSrc: "src/client/assets/mvspearpoint.png",
      links: [
        {
          url: "http://mvspearpoints.com",
          goTo: true,
        }
      ],
      parent: "recent",
    }, {
      title: "The Barn, Bowl, and Bistro",
      desc: "design &amp; build",
      subDesc: "collaboration with raglan",
      thumbnailSrc: "src/client/assets/barnmv.png",
      links: [
        {
          url: "http://thebarnmv.com",
          goTo: true,
        }
      ],
      parent: "recent",
    }, {
      title: "Majic Yacht Charters",
      desc: "design &amp; build",
      thumbnailSrc: "src/client/assets/majicmv.png",
      links: [
        {
          url: "http://majicmv.com",
          goTo: true,
        }
      ],
      parent: "recent",
    }, {
      title: "EXOvault",
      desc: "design &amp; build",
      subDesc: "collaboration with raglan",
      thumbnailSrc: "src/client/assets/exovault.png",
      links: [
        {
          url: "http://exovault.com",
          goTo: true,
        }
      ],
      parent: "recent",
    }
  ]
}

export default db

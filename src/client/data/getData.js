const subGallery = {
  'curious-canuck': {
    data: [
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
    ]
  },
  'farmers-markt-finder': {
    data: [
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
    ]
  },
  'approve-me-kanye': {
    data: [
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
    ]
  },
  'hood-guide': {
    data: [
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
    ]
  }
}

const getData = id => {
  if (subGallery[id]) {
    console.log('getData', id, subGallery[id])
    return subGallery[id].data
  }
  return null
}

export default getData

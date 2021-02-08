import gql from 'graphql-tag';
// import Test from '../assets/header/CTDC_Logo.svg';

// The ideal image size of landingPageHero 1400x600px
// Tile1 Tile2 Tile3 images 293x349 px
// Tile4 image optimum size 600x 436 px
export const landingPageData = {
  callToActionTitle: 'Center for Technical Operations Support',
  callToActionDescription: 'Project Management Office Administration System',
  callToActionButtonText: 'EXPLORE THE SITE',
  callToActionLink: '/project',
  landingPageHero: {
    alt: 'Alt tag1',
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/Hero_Graphic.png',
  },
  landingPageStatsBar: [
    {
      statTitle: 'Programs',
      statAPI: 'numberOfPrograms',
    },
    {
      statTitle: 'Task Orders',
      statAPI: 'numberOfTaskOrders',
    },
    {
      statTitle: 'Projects',
      statAPI: 'numberOfProjects',
    },
    {
      statTitle: 'Files',
      statAPI: 'numberOfFiles',
    },
  ],
  tile1: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/tileAbout.png',
    titleText: 'Center for Technical Operations Support',
    descriptionText: 'Effective data management is key to scientific discovery. Bento is an open source framework, developed by the Frederick National Laboratory for Cancer Research, to support the creation of data sharing platforms, that adhere to the FAIR principles of scientific data management.',
    callToActionText: 'Read More',
    callToActionLink: '/bento', // This links to the "About" static page.
  },
  tile2: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/tileProgam.png',
    titleText: 'Programs',
    descriptionText: 'Access information related to the programs and task orders managed by CTOS.',
    callToActionText: 'View',
    callToActionLink: '/programs', // This links to the Programs Listing Page.
  },
  tile3: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/tileAnalytics.png',
    titleText: 'Resources',
    descriptionText: 'Access a list of resources for Project Managers.',
    callToActionText: 'Read More',
    callToActionLink: '/resources', // Link to the "Resources" Static Page
  },
  tile4: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/tileCases.png',
    titleText: 'Projects',
    descriptionText: 'Access to Project Portfolio.',
    callToActionText: 'Explore',
    callToActionLink: '/cases', // This links to the cases dashboard.
  },
};

// --------------- GraphQL query - Retrieve Landing page data --------------
export const GET_LANDING_PAGE_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfTaskOrders
  numberOfProjects
  numberOfFiles
  }
  `;

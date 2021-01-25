import gql from 'graphql-tag';
// import Test from '../assets/header/CTDC_Logo.svg';

// The ideal image size of landingPageHero 1400x600px
// Tile1 Tile2 Tile3 images 293x349 px
// Tile4 image optimum size 600x 436 px
export const landingPageData = {
  callToActionTitle: 'CTOS Project Management and Operations Office',
  callToActionDescription: 'A Program Management System powered by BENTO Framework',
  callToActionButtonText: 'EXPLORE THE SITE',
  callToActionLink: '/cases',
  landingPageHero: {
    alt: 'Alt tag1',
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/Hero_Graphic.png',
  },
  landingPageStatsBar: [
    {
      statTitle: 'Programs',
      statAPI: 'numberOfPrograms',
    },
    {
      statTitle: 'Task Orders',
      statAPI: 'numberOfStudies',
    },
    {
      statTitle: 'Projects',
      statAPI: 'numberOfSubjects',
    },
    {
      statTitle: 'Files',
      statAPI: 'numberOfFiles',
    },
  ],
  tile1: {
    alt: '',
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tileAbout.png',
    titleText: 'CTOS Project Management Office',
    descriptionText: 'The CTOS Program/Project Management Office is committed to excelence in service. Following the latest Project Management standards, best practices, and our expertise in Data Science, Software Engineering and Project Management we excell in our role as "Trusted Partners" for our Government client.',
    callToActionText: 'Read More',
    callToActionLink: '/bento', // This links to the "About" static page.
  },
  tile2: {
    alt: '',
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tileProgam.png',
    titleText: 'Programs',
    descriptionText: 'As "Trusted Partners" and as part of The Frederick National Laboratory for Cancer Research (FNL) mission, CTOS supports a variety of program and projects, including but not limited to Data Science, Data Management, Data Analytics, Data Coordination, Project Management, Contract Management, and Project Finance Management, Software Development and Engineering, Software Quality Assurance, Web Design and Development, among others.',
    callToActionText: 'View',
    callToActionLink: '/programs', // This links to the Programs Listing Page.
  },
  tile3: {
    alt: '',
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tilectosResources.png',
    titleText: 'CTOS PMO Resources',
    descriptionText: 'Links to resources to aid our Project Managers and other professional in their execution of day-to-day operations.',
    callToActionText: 'Read More',
    callToActionLink: '/resources', // Link to the "Resources" Static Page
  },
  tile4: {
    alt: '',
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tileCases.png',
    titleText: 'Projects',
    descriptionText: 'Access the list of active projects.',
    callToActionText: 'Explore',
    callToActionLink: '/cases', // This links to the cases dashboard.
  },
};

// --------------- GraphQL query - Retrieve Landing page data --------------
export const GET_LANDING_PAGE_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfFiles
  }
  `;

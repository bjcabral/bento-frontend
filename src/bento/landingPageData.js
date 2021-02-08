import gql from 'graphql-tag';
// import Test from '../assets/header/CTDC_Logo.svg';

// The ideal image size of landingPageHero 1400x600px
// Tile1 Tile2 Tile3 images 293x349 px
// Tile4 image optimum size 600x 436 px
export const landingPageData = {
<<<<<<< HEAD
  callToActionTitle: 'Center for Technical Operations Support',
  callToActionDescription: 'Project Management Office Administration System',
=======
  callToActionTitle: 'Center for Technology Operations Support (CTOS)',
  callToActionDescription: 'Program and Project Management System',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
  callToActionButtonText: 'EXPLORE THE SITE',
  callToActionLink: '/project',
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
<<<<<<< HEAD
      statAPI: 'numberOfTaskOrders',
    },
    {
      statTitle: 'Projects',
      statAPI: 'numberOfProjects',
=======
      statAPI: 'numberOfStudies',
    },
    {
      statTitle: 'Projects',
      statAPI: 'numberOfSubjects',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
    },
    {
      statTitle: 'Files',
      statAPI: 'numberOfFiles',
    },
  ],
  tile1: {
    alt: '',
<<<<<<< HEAD
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/tileAbout.png',
    titleText: 'Center for Technical Operations Support',
    descriptionText: 'Effective data management is key to scientific discovery. Bento is an open source framework, developed by the Frederick National Laboratory for Cancer Research, to support the creation of data sharing platforms, that adhere to the FAIR principles of scientific data management.',
=======
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tileAboutFNL.png',
    titleText: 'CTOS Project Mamangement Office',
    descriptionText: 'CTO PMO is committed to excelence in service. Following the latest Project Management standards, best practices, and our expertise in Data Science, Software Engineering and Project Management we excell in our role as "Trusted Partners" for our Government client and contribution to the mission of the Frederick National Laboratory.',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
    callToActionText: 'Read More',
    callToActionLink: '/bento', // This links to the "About" static page.
  },
  tile2: {
    alt: '',
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tileProgramManagement.png',
    titleText: 'Programs',
<<<<<<< HEAD
    descriptionText: 'Access information related to the programs and task orders managed by CTOS.',
=======
    descriptionText: 'As "Trusted Partners" and in support of the Frederick National Laboratory for Cancer Research (FNL) mission, CTOS supports a variety of program and projects, including but not limited to Data Science, Data Management, Data Analytics, Data Coordination, Project Management, Contract Management, and Project Finance Management, Software Development and Engineering, Software Quality Assurance, Web Design and Development, among others.',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
    callToActionText: 'View',
    callToActionLink: '/programs', // This links to the Programs Listing Page.
  },
  tile3: {
    alt: '',
<<<<<<< HEAD
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/tileAnalytics.png',
    titleText: 'Resources',
    descriptionText: 'Access a list of resources for Project Managers.',
=======
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tilectosResources.png',
    titleText: 'PMO Resources',
    descriptionText: 'Links to resources to aid our Project Managers and other professional in their execution of day-to-day operations.',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
    callToActionText: 'Read More',
    callToActionLink: '/resources', // Link to the "Resources" Static Page
  },
  tile4: {
    alt: '',
<<<<<<< HEAD
    img: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/landing/tileCases.png',
    titleText: 'Projects',
    descriptionText: 'Access to Project Portfolio.',
=======
    img: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/landing/tileCases.png',
    titleText: 'Projects',
    descriptionText: 'Access the list of active projects.',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
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

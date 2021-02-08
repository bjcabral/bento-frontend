import gql from 'graphql-tag';

export const statsStyling = {
  global: {
    horizontalStyle: true,
    statTitleFirst: true,
    height: '47px',
    background: '#8DCAFF',
  },
};

export const globalStatsData = [
  // A maximum of 6 stats are allowed
  {
    statTitle: 'Programs',
    type: 'field',
    statAPI: 'numberOfPrograms',
  },
  {
    statTitle: 'Task Orders',
    type: 'field',
    statAPI: 'numberOfStudies',
  },
  {
    statTitle: 'Projects',
    type: 'field',
    statAPI: 'numberOfSubjects',
  },
  {
<<<<<<< HEAD
    statTitle: 'Files',
=======
    statTitle: 'files',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
    type: 'field',
    statAPI: 'numberOfFiles',
  },
];

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_GLOBAL_STATS_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfFiles
  }
  `;

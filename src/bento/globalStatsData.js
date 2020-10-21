import gql from 'graphql-tag';

export const statsBarStyle = 'vertical';

export const globalStatsData = [
  // A maximum of 6 stats are allowed
  {
    statTitle: 'Programs',
    datatable_field: 'program',
    type: 'field',
    statAPI: 'numberOfPrograms',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programNumberofFilesIcon.svg',
    statIconAlt: 'Number of files icon',
  },
  {
    statTitle: 'Arms',
    datatable_field: 'study_acronym',
    type: 'field',
    statAPI: 'numberOfStudies',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programNumberofFilesIcon.svg',
    statIconAlt: 'Number of files icon',
  },
  {
    statTitle: 'Cases',
    datatable_field: 'subject_id',
    type: 'field',
    statAPI: 'numberOfSubjects',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programNumberofFilesIcon.svg',
    statIconAlt: 'Number of files icon',
  },
  {
    statTitle: 'samples',
    type: 'array',
    datatable_field: 'samples',
    statAPI: 'numberOfSamples',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programNumberofFilesIcon.svg',
    statIconAlt: 'Number of files icon',
  },
  {
    statTitle: 'Assays',
    type: 'array',
    datatable_field: 'lab_procedures',
    statAPI: 'numberOfLabProcedures',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programNumberofFilesIcon.svg',
    statIconAlt: 'Number of files icon',
  },
  {
    statTitle: 'files',
    type: 'object',
    datatable_field: 'files',
    datatable_sub_field: 'file_id',
    statAPI: 'numberOfFiles',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programNumberofFilesIcon.svg',
    statIconAlt: 'Number of files icon',
  },
];

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_GLOBAL_STATS_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
  }
  `;

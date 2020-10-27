import gql from 'graphql-tag';

export const statsBarStyle = 'bento';

// // ctdc
// export const globalStatsData = [
//   // A maximum of 6 stats are allowed
//   {
//     statTitle: 'TRIALS:',
//     datatable_field: 'program',
//     type: 'field',
//     statAPI: 'numberOfPrograms',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/stats/stats-bar-trials.svg',
//     statIconAlt: 'Studies Stats Bar Icon',
//   },
//   {
//     statTitle: 'CASES:',
//     datatable_field: 'study_acronym',
//     type: 'field',
//     statAPI: 'numberOfStudies',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/stats/stats-bar-cases.svg',
//     statIconAlt: 'Cases Stats Bar Icon',
//   },
//   {
//     statTitle: 'FILES:',
//     datatable_field: 'subject_id',
//     type: 'field',
//     statAPI: 'numberOfSubjects',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/stats/stats-bar-files.svg',
//     statIconAlt: 'Files Stats Bar Icon',
//   },
// ];

// // icdc
// export const globalStatsData = [
//   // A maximum of 6 stats are allowed
//   {
//     statTitle: 'Studies',
//     datatable_field: 'program',
//     type: 'field',
//     statAPI: 'numberOfPrograms',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/Icon-studies-stats.svg',
//     statIconAlt: 'Studies Stats Bar Icon',
//   },
//   {
//     statTitle: 'Cases',
//     datatable_field: 'study_acronym',
//     type: 'field',
//     statAPI: 'numberOfStudies',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/Icon-cases-stats.svg',
//     statIconAlt: 'Cases Stats Bar Icon',
//   },
//   {
//     statTitle: 'Samples',
//     datatable_field: 'subject_id',
//     type: 'field',
//     statAPI: 'numberOfSubjects',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/Icon-samples-stats.svg',
//     statIconAlt: 'Samples Stats Bar Icon',
//   },
//   {
//     statTitle: 'Files',
//     datatable_field: 'subject_id',
//     type: 'field',
//     statAPI: 'numberOfSubjects',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/Icon-files-stats.svg',
//     statIconAlt: 'Files Stats Bar Icon',
//   },
//   {
//     statTitle: 'Aliquots',
//     datatable_field: 'subject_id',
//     type: 'field',
//     statAPI: 'numberOfSubjects',
//     statIconSrc: 'https://raw.githubusercontent.com/CBIIT/ctdc-codebase/master/src/main/frontend/src/assets/icons/Icon-aliquots-stats.svg',
//     statIconAlt: 'Aliquots Stats Bar Icon',
//   },
// ];

// bento
export const globalStatsData = [
  // A maximum of 6 stats are allowed
  {
    statTitle: 'Programs',
    datatable_field: 'program',
    type: 'field',
    statAPI: 'numberOfPrograms',
  },
  {
    statTitle: 'Arms',
    datatable_field: 'study_acronym',
    type: 'field',
    statAPI: 'numberOfStudies',
  },
  {
    statTitle: 'Cases',
    datatable_field: 'subject_id',
    type: 'field',
    statAPI: 'numberOfSubjects',
  },
  {
    statTitle: 'samples',
    type: 'array',
    datatable_field: 'samples',
    statAPI: 'numberOfSamples',
  },
  {
    statTitle: 'Assays',
    type: 'array',
    datatable_field: 'lab_procedures',
    statAPI: 'numberOfLabProcedures',
  },
  {
    statTitle: 'files',
    type: 'object',
    datatable_field: 'files',
    datatable_sub_field: 'file_id',
    statAPI: 'numberOfFiles',
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

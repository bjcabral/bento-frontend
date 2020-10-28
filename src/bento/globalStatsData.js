import gql from 'graphql-tag';

export const statsStyling = {
  global: {
    horizontalStyle: true,
    statTitleFirst: true,
    height: '47px',
    background: '#8DCAFF',
  },
  statGroup: {
    // spacing between stats
    margin: '4px 32px',
  },
  statTitle: {
    float: 'left',
    color: '#062D4F',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '11px',
    letterSpacing: '1px',
    margin: '14px 8px 0px 0px',
    textTransform: 'uppercase',
  },
  statCount: {
    color: '#0467BD',
    fontFamily: 'Oswald',
    fontSize: '20px',
    margin: '6px 0px 0px 0px',
    fontWeight: 600,
  },
  statsIcon: {
    position: 'absolute',
    float: 'left',
    width: '28px',
    height: '28px',
    marginTop: '8px',
    margin: '8px 0px 0px -35px',
  },
};

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

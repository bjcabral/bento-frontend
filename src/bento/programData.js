import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const programListingIcon = {
  src: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/program/programIcon.svg',
  alt: 'Bento program logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/program/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'Programs',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'programInfo',
  // Value must be one of the 'field' in columns
  defaultSortField: 'program_acronym',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'program_acronym',
      header: 'Program Code',
      link: '/program/{program_id}',
      display: true,
    },
    {
      dataField: 'program_id',
      header: 'Program ID',
    },
    {
      dataField: 'program_name',
      header: 'Program Name',
    },
    {
      dataField: 'program_start_date',
      header: 'Start Date',
    },
    {
      dataField: 'program_end_date',
      header: 'End Date',
    },
    {
      dataField: 'num_task_orders',
      header: 'Number of Task Orders',
    },
    {
      dataField: 'num_projects',
      header: 'Number of Projects',
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_PROGRAMS_DATA_QUERY = gql`{
  programInfo {
 program_acronym
 program_id
 program_name
 program_start_date
 program_end_date
 num_task_orders 
 num_projects 
 }
}
 `;

export {
  programListingIcon,
  externalLinkIcon,
  table,
  GET_PROGRAMS_DATA_QUERY,
};

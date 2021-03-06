import gql from 'graphql-tag';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Program :',
  dataField: 'program_acronym',
};

const pageSubTitle = {
  dataField: 'program_id',
};

const breadCrumb = {
  label: 'ALL PROGRAMS',
  link: '/programs',
};

// --------------- Aggregated count configuration --------------
const aggregateCount = {
  labelText: 'Task Orders',
  dataField: 'num_task_orders',
  link: '/task_order',
  display: true,
};

// --------------- Icons configuration --------------
// Ideal size for programDetailIcon is 107x107 px
// Ideal size for externalLinkIcon is 16x16 px
const programDetailIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programIcon.svg',
  alt: 'Bento program logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Left Pannel configuration --------------
// A maximum of 6 leftPanelattributes are allowed
const leftPanel = {
  attributes: [
    {
      dataField: 'program_acronym',
      label: 'Program',
    },
    {
      dataField: 'program_name',
      label: 'Program Name',
    },
    {
      dataField: 'program_id',
      label: 'Program Id',
    },
    {
      dataField: 'program_full_description',
      label: 'Program Description',
    },
    {
      dataField: 'institution_id',
      label: 'Institution',
    },
    {
      dataField: 'program_external_url',
      label: 'External Link to Program',
      externalLinkToLabel: true,
    },
  ],
};

// --------------- Right Pannel configuration --------------
// Ideal size for fileIconSrc is 66x53 px
const rightPanel = {
  widget: [
    {
      dataField: 'num_task_orders',
      label: 'Program Operational Budget',
      display: true,
    },
  ],
  files: [
    {
      dataField: 'num_prog_files',
      label: 'Number of Program files',
      fileIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/programNumberofFilesIcon.svg',
      fileIconAlt: 'Number of files icon',
      display: true,
    },
  ],
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'Task Orders',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'programDetail',
  // Value must be one of the 'field' in columns
  defaultSortField: 'task_order_acronym',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'task_order_id',
      header: 'Task Order',
    },
    {
      dataField: 'task_order_acronym',
      header: 'Task Order Acronym',
    },
    {
      dataField: 'task_order_name',
      header: 'Task Order Name',
    },
    {
      dataField: 'task_order_full_description',
      header: 'Task Order Description',
    },
    {
      dataField: 'task_order_type',
      header: 'Task Order Type',
    },
    {
      dataField: 'to_num_projects',
      header: 'Associated Projects',
    },
  ],
};

// --------------- GraphQL query - Retrieve program details --------------
const GET_PROGRAM_DETAIL_DATA_QUERY = gql`
query programDetail($program_id: String!) {
  programDetail(program_id: $program_id) {
    program_acronym
    program_id
    program_name
    program_full_description
    institution_id
    program_external_url
    num_prog_files
    to_research_area
    task_order_type
    task_order_acronym
    task_order_info
    task_order_full_description
    to_num_projects
  }
}`;

export {
  pageTitle,
  pageSubTitle,
  aggregateCount,
  programDetailIcon,
  leftPanel,
  rightPanel,
  externalLinkIcon,
  breadCrumb,
  GET_PROGRAM_DETAIL_DATA_QUERY,
  table,
};

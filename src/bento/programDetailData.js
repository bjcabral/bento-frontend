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
<<<<<<< HEAD
  labelText: 'Programs',
  dataField: 'programs',
  link: '/program',
=======
  labelText: 'Projects',
  dataField: 'num_subjects',
  link: '/cases',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
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
      dataField: 'institution_name',
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
<<<<<<< HEAD
      dataField: 'project_id',
      label: 'Projects',
=======
      dataField: 'diagnoses',
      label: 'Task Orders',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
      display: true,
    },
  ],
  files: [
    {
      dataField: 'num_project_files',
      label: 'Number of files',
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
<<<<<<< HEAD
  title: 'Task Orders',
=======
  title: 'TASK ORDERS',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'task_order_id',
  // Value must be one of the 'field' in columns
  defaultSortField: 'task_order_acronym',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
<<<<<<< HEAD
      dataField: 'task_order_acronym',
      header: 'Task Order',
      link: '/task_order/{task_order_acronym}',
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
      dataField: 'projects',
      header: 'Associated Projects',
=======
      dataField: 'study_acronym',
      header: 'Task Order ID',
      link: '/arm/{study_acronym}',
    },
    {
      dataField: 'study_name',
      header: 'Task Order Name',
    },
    {
      dataField: 'study_full_description',
      header: 'Task Order Description',
    },
    {
      dataField: 'num_subjects',
      header: 'Number of Projects',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
    },
  ],
};
// --------------- GraphQL query - Retrieve program details --------------
const GET_PROGRAM_DETAIL_DATA_QUERY = gql`{
query programDetail(program_id: String) {
  programDetail(program_id: $program_id) {
    program_acronym
    program_id
    program_name
    program_full_description
    institution_name
    program_external_url
    programs 
    num_program_files
    }
    task_order { 
      task_order_id
      task_order_name
      task_order_type
      task_order_acronym
      to_date_of_approval
      to_start_date
      to_end_date
      task_order_full_description
      task_order_short_description
      task_order_acquisition_type
      to_manager
      to_state
      to_unit_of_work
      to_research_area
      num_task_orders
      to_num_files
    }
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

import gql from 'graphql-tag';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
};

// -------------- Task Order ID area configurations --------------
const header = {
  label: 'Task Order',
  dataField: 'task_order_acronym',
};

// --------------- Data panel configuration --------------
const subsections = [
  // Each object here represents a subsection in the panel
  // A maximum of 6 subsections are allowed
  {
    properties: [
      // Each object here represents a set of label:value pair of a property
      // A maximum of 10 properties are allowed
      {
        label: 'Task Order',
        dataField: 'task_order_acronym',
        // link property specify URL value should link to
        // space holder "{study_acronym}" will be replaced by
        // actual value in the property program_id
        // link: '/arm/{study_acronym}',
        // labelLink property specify URL label should link to
        // labelLink: '/programs',
        // external links must have URL scheme part such as "https://"
      },
      {
        label: 'Task Order Name',
        dataField: 'task_order_name',
      },
      {
        label: 'Task Order Type',
        dataField: 'task_order_type',
      },
      {
        label: 'Task Order Description',
        dataField: 'task_order_full_description',
      },
    ],
  },
];

// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/bjcabral/bento-frontend/master/src/assets/program/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Projects table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'ASSOCIATED PROJECTS',
  // Field name for files data, need to be updated only when using a different GraphQL query
  projectsField: 'projects_data',
  // Value must be one of the 'dataField's in "columns"
  defaultSortField: 'project_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  columns: [
    {
      dataField: 'project_id',
      header: 'Project ID',
    },
    {
      dataField: 'project_name',
      header: 'Project Name',
    },
    {
      dataField: 'project_description',
      header: 'Description',
    },
    {
      dataField: 'project_start_date',
      header: 'Project Start Date',
    },
    {
      dataField: 'project_end_date',
      header: 'Project End Date',
    },
    {
      dataField: 'project_type',
      header: 'Project Type',
    },
    {
      dataField: 'project_manager_name',
      header: 'Project Manager',
    },
    {
      dataField: 'project_gov_project_manager',
      header: 'Gov. Project Manager',
    },
  ],
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'taskOrderDetail';
// Primary ID field used to query a task order
const taskOrderIDField = 'task_order_id';
// GraphQL query to retrieve detailed info for a case
const GET_TASK_ORDER_DETAIL_DATA_QUERY = gql`
  query taskOrderDetail($task_order_acronym: String) {
    taskOrderDetail(task_order_acronym: $task_order_acronym) {
      task_order_id
      task_order_acronym
      task_order_name
      task_order_type
      task_order_full_description  
      task_order_date_of_approval
      to_start_date
      to_end_date
      to_acquisition_type
      to_manager
      to_state
      to_unit_of_work
      to_research_area
      to_num_projects
      to_num_files
      num_task_orders
      projects_data {
        project_id
        project_name
        project_acronym
        project_status
        project_date_of_approval
        project_start_date
        project_end_date
        project_type
        project_full_description
        project_manager
        project_gov_project_manager
      }
    }
  }
`;

export {
  header,
  dataRoot,
  taskOrderIDField,
  subsections,
  table,
  GET_TASK_ORDER_DETAIL_DATA_QUERY,
};

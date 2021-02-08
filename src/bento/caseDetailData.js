import gql from 'graphql-tag';
import { FileOnRowsSelect } from '../utils/fileTable';
import { SampleOnRowsSelect } from '../utils/sampleFileTable';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
};

// -------------- Case ID area configurations --------------
const caseHeader = {
  label: 'Project ID',
  dataField: 'subject_id',
};

// --------------- Data panel configuration --------------
const leftPanel = [
  // Each object here represents a subsection in the panel
  // A maximum of 3 subsections are allowed
  {
    sectionHeader: 'Program',
    // sectionDesc: 'Subsection description goes here',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Assigned to Program',
        dataField: 'program_acronym',
        // link property specify URL value should link to
        // space holder "{program_id}" will be replaced by actual value in the property program_id
        link: '/program/{program_id}',
        // labelLink property specify URL label should link to
        // labelLink: '/programs',
        // external links must have URL scheme part such as "https://"
      },
      {
        label: 'Project',
        dataField: 'study_acronym',
        link: '/arm/{study_acronym}',
      },
      {
        label: 'Project Description',
        dataField: 'study_name',
      },
    ],
  },
  {
    sectionHeader: 'Project Basic Infomration',
    // sectionDesc: 'Demographic Related Info',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Project Start Date',
        dataField: 'gender',
      },
      {
        label: 'Project Manager',
        dataField: 'race',
      },
      {
        label: 'Government Sponsor Org.',
        dataField: 'ethnicity',
      },
      {
        label: 'Government Sponsor POC',
        dataField: 'age_at_index',
      },
      {
        label: 'Government Project Manager',
        dataField: 'menopause_status',
      },
      {
        label: 'Project Ending Date',
        dataField: 'vital_status',
      },
    ],
  },
  {
    sectionHeader: 'Project Finances',
    // sectionDesc: 'Diagnosis Related Info',
    properties: [
      {
        label: 'Funding Source',
        dataField: 'disease_type',
      },
      {
        label: 'Approved Budget',
        dataField: 'disease_subtype',
      },
      {
        label: 'Funding Level',
        dataField: 'tumor_grade',
      },
      {
        label: 'Cost-to-Date',
        dataField: 'tumor_largest_dimension_diameter',
      },
      {
        label: 'Estimate To Completion',
        dataField: 'er_status',
      },
      {
        label: 'Estimat At complition',
        dataField: 'pr_status',
      },
      {
        label: 'Funding Expiration',
        dataField: 'recurrence_score',
      },
    ],
  },
];

const rightPanel = [
  // Each object here represents a subsection in the panel
  // A maximum of 3 subsections are allowed
  {
    sectionHeader: 'Project Status',
    // sectionDesc: 'Project Related Info',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Project Current Activities',
        dataField: 'primary_surgical_procedure',
      },
      {
        label: 'Last Month Activities',
        dataField: 'chemotherapy_regimen_group',
      },
      {
        label: 'Next Month Activities',
        dataField: 'chemotherapy_regimen',
      },
    ],
  },

  {
    sectionHeader: 'Project Subcontracts Info.',
    // sectionDesc: 'Project Subcontract Info', properties: [
    // A maximum of 10 properties are allowed
    properties: [
      {
        label: 'Project Subcontracts',
        dataField: 'primary_surgical_procedure',
      },
      {
        label: 'Subcontract Value',
        dataField: 'chemotherapy_regimen_group',
      },
      {
        label: 'Subcontract Current Cost',
        dataField: 'chemotherapy_regimen',
      },

      {
        label: 'Subcontract Expiration Date',
        dataField: 'endocrine_therapy_type',
      },

      {
        label: 'Subcontract POC',
        dataField: 'test_name',
      },
    ],
  },
  {
    sectionHeader: 'Project Issues',
    // sectionDesc: 'Follow Up Related Info',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Issue Description',
        dataField: 'dfs_event_indicator',
      },
      {
        label: 'Issue Level',
        dataField: 'recurrence_free_indicator',
      },
      {
        label: 'Mitigation Strategy',
        dataField: 'distant_recurrence_indicator',
      },
    ],
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Table 1 configuration --------------
const table1 = {
  // Set 'display' to false to hide the table entirely
  display: false,
  // Table title
  tableTitle: 'ASSOCIATED SAMPLES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  subjectDetailField: 'samples',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'sample_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#09A175',
    opacity: '1',
    border: '0px',
    cursor: 'pointer',
  },
  ActiveSaveButtonDefaultStyle: {
    disabled: 'true',
    opacity: '0.3',
    cursor: 'auto',
  },
  DeactiveSaveButtonDefaultStyle: {
    cursor: 'pointer',
    opacity: 'unset',
    border: 'unset',
  },
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files associated with the selected sample(s).',
  helpMessage: 'Here help message',
  // showHideColumns 'true' or 'false'
  showHideColumns: true,
  // download csv
  download: false,
  // downloaded File Name
  downloadFileName: 'Bento_case_files_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'sample_id',
      header: 'Sample ID',
      sort: 'asc',
      primary: true,
      display: true,
    },
    {
      dataField: 'disease_subtype',
      header: 'Diagnosis',
      dataFromRoot: true,
    },
    {
      dataField: 'tissue_type',
      header: 'Tissue Type',
    },
    {
      dataField: 'composition',
      header: 'Tissue Composition',
    },
    {
      dataField: 'sample_anatomic_site',
      header: 'Sample Anatomic Site',
    },
    {
      dataField: 'method_of_sample_procurement',
      header: 'Sample Procurement Method',
    },
    {
      dataField: 'test_name',
      header: 'Platform',
      dataFromRoot: true,
    },
  ],
  // Util Functions
  // Custom function on selct checkbox is selected.
  customOnRowsSelect: SampleOnRowsSelect,
};

// --------------- Table 2 configuration --------------
const table2 = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  tableTitle: 'PROJECT ASSOCIATED FILES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  subjectDetailField: 'files',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#09A175',
    opacity: '1',
    border: '0px',
    cursor: 'pointer',
  },
  ActiveSaveButtonDefaultStyle: {
    disabled: 'true',
    opacity: '0.3',
    cursor: 'auto',
  },
  DeactiveSaveButtonDefaultStyle: {
    cursor: 'pointer',
    opacity: 'unset',
    border: 'unset',
  },
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files.',
  helpMessage: 'Here help message',
  // showHideColumns 'true' or 'false'
  showHideColumns: true,
  // download csv 'true' or 'false'
  download: false,
  // downloaded File Name
  downloadFileName: 'Bento_case_samples_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'File Type',
    },
    {
      dataField: 'association',
      header: 'Association',
    },
    {
      dataField: 'file_description',
      header: 'Description',
    },
    {
      dataField: 'file_format',
      header: 'Format',
    },
    {
      dataField: 'file_size',
      header: 'Size',
      // set formatBytes to true to display file size (in bytes) in a more human readable format
      formatBytes: true,
    },
  ],
  // Util Functions
  // Custom function on selct checkbox is selected.
  customOnRowsSelect: FileOnRowsSelect,
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'subjectDetail';
// query name, also used as key for files to Samples Mapping.
const filesOfSamples = 'samplesForSubjectId';
// Primary ID field used to query a case
const caseIDField = 'subject_id';

// GraphQL query to retrieve detailed info for a case
const GET_CASE_DETAIL_DATA_QUERY = gql`
  query subjectDetail($subject_id: String!) {
    subjectDetail(subject_id: $subject_id) {
      subject_id
      program_acronym
      program_id
      study_acronym
      study_name
      gender
      race
      ethnicity
      age_at_index
      menopause_status
      vital_status
      cause_of_death
      disease_type
      disease_subtype
      tumor_grade
      tumor_largest_dimension_diameter
      er_status
      pr_status
      nuclear_grade
      recurrence_score
      primary_surgical_procedure
      chemotherapy_regimen_group
      chemotherapy_regimen
      endocrine_therapy_type
      dfs_event_indicator
      recurrence_free_indicator
      distant_recurrence_indicator
      dfs_event_type
      first_recurrence_type
      days_to_progression
      days_to_recurrence
      test_name
      files {
        subject_id
        file_name
        file_type
        association
        file_description
        file_format
        file_size
        file_id
        md5sum
      }
      samples {
        sample_id
        sample_anatomic_site
        composition
        method_of_sample_procurement
        tissue_type
        sample_type
      }
      num_samples
      num_lab_procedures
    }
    samplesForSubjectId(subject_id: $subject_id) {
      sample_id
      files {
        file_id
        file_name
      }
    }
  }
`;

export {
  caseHeader,
  dataRoot,
  caseIDField,
  filesOfSamples,
  leftPanel,
  rightPanel,
  table1,
  table2,
  GET_CASE_DETAIL_DATA_QUERY,
};

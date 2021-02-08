import gql from 'graphql-tag';

// --------------- Dashboard Sidebar Filters configuration --------------
// A maximum of 12 facetSearchData are allowed
export const facetSearchData = [
  {
    label: 'Program', field: 'group', api: 'subjectCountByProgram', apiForFiltering: 'filterSubjectCountByProgram', datafield: 'programs', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Project ID', field: 'group', api: 'subjectCountByStudy', apiForFiltering: 'filterSubjectCountByStudy', datafield: 'studies', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Project Name', field: 'group', api: 'subjectCountByDiagnoses', apiForFiltering: 'filterSubjectCountByDiagnoses', datafield: 'diagnoses', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Research Area', field: 'group', api: 'subjectCountByRecurrenceScore', apiForFiltering: 'filterSubjectCountByRecurrenceScore', datafield: 'rc_scores', section: 'Filter By Projects', show: true,
  },
  {
    label: 'UoW', field: 'group', api: 'subjectCountByTumorSize', apiForFiltering: 'filterSubjectCountByTumorSize', datafield: 'tumor_sizes', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Approved Budget', field: 'group', api: 'subjectCountByChemotherapyRegimen', apiForFiltering: 'filterSubjectCountByChemotherapyRegimen', datafield: 'chemo_regimen', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Funded Amount', field: 'group', api: 'subjectCountByTumorGrade', apiForFiltering: 'filterSubjectCountByTumorGrade', datafield: 'tumor_grades', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Cost-to-Date', field: 'group', api: 'subjectCountByErStatus', apiForFiltering: 'filterSubjectCountByErStatus', datafield: 'er_status', section: 'Filter By Projects', show: true,
  },
  {
    label: 'ETC', field: 'group', api: 'subjectCountByPrStatus', apiForFiltering: 'filterSubjectCountByPrStatus', datafield: 'pr_status', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Project Manager', field: 'group', api: 'subjectCountByEndocrineTherapy', apiForFiltering: 'filterSubjectCountByEndocrineTherapy', datafield: 'endo_therapies', section: 'Filter By Projects', show: true,
  },
  {
    label: 'Government POC', field: 'group', api: 'subjectCountByMenopauseStatus', apiForFiltering: 'filterSubjectCountByMenopauseStatus', datafield: 'meno_status', section: 'Filter By Projects', show: true,
  },
  {
    label: 'File Association', field: 'group', api: 'subjectCountByFileAssociation', apiForFiltering: 'filterSubjectCountByFileAssociation', datafield: 'association', section: 'Filter By Files', show: true,
  },
  {
    label: 'File Type', field: 'group', api: 'subjectCountByFileType', apiForFiltering: 'filterSubjectCountByFileType', datafield: 'file_type', section: 'Filter By Files', show: true,
  },

  {
    label: 'Project ID', field: 'group', api: 'subjectCountByFileType', apiForFiltering: 'filterSubjectCountByFileType', datafield: 'file_type', section: 'Filter By Files', show: true,
  },

  {
    label: 'Task Order', field: 'group', api: 'subjectCountByStudy', apiForFiltering: 'filterSubjectCountByStudy', datafield: 'study_acronym', section: 'Filter By Projects', show: true,
  },
];

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  'Filter By Projects': {
    color: '#10A075',
    height: '5px',
  },
  'Filter By Files': {
    color: '#E636E4',
    height: '5px',
  },
};

// --------------- Dashboard Widgets configuration --------------
// A maximum of 6 widgets are allowed
export const widgetsData = [
  {
    type: 'sunburst',
    label: 'Programs',
    dataName: 'armsByPrograms',
    datatable_level1_field: 'program',
    datatable_level2_field: 'study_acronym',
    show: true,
  },
  {
    type: 'donut',
    label: 'Projects',
    dataName: 'subjectCountByDiagnoses',
    datatable_field: 'diagnosis',
    show: true,
  },
  {
    type: 'donut',
    label: 'Severable Projects',
    dataName: 'subjectCountByRecurrenceScore',
    datatable_field: 'recurrence_score',
    show: true,
  },
  {
    type: 'donut',
    label: 'Non-severable Projects',
    dataName: 'subjectCountByTumorSize',
    datatable_field: 'tumor_size',
    show: true,
  },
  {
    type: 'donut',
    label: 'Projects Status',
    dataName: 'subjectCountByChemotherapyRegimen',
    datatable_field: 'chemotherapy',
    show: true,
  },
  {
    type: 'donut',
    label: 'Other Projects',
    dataName: 'subjectCountByEndocrineTherapy',
    datatable_field: 'endocrine_therapy',
    show: true,
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/program/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Dashboard Table configuration --------------
export const dashboardTable = {
  tableTitle: 'Projects',
  tableData: [
    // A maximum of 10 columns (tableData) are allowed
    {
      dataField: 'subject_id',
      header: 'Project ID',
      sort: 'asc',
      link: '/case/{subject_id}',
      primary: true,
      display: true,
    },
    {
      dataField: 'program',
      header: 'Program Code',
      sort: 'asc',
      link: '/program/{program_id}',
      display: true,
    },
    {
      dataField: 'program_id',
      header: 'Program ID',
      sort: 'asc',
      display: false,
    },
    {
      dataField: 'study_acronym',
      header: 'Project Name',
      sort: 'asc',
      link: '/arm/{study_acronym}',
      display: true,
    },
    {
      dataField: 'diagnosis',
      header: 'Project Name',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'recurrence_score',
      header: 'Research Area',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'tumor_size',
      header: 'UoW',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'er_status',
      header: 'Approved Budget',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'pr_status',
      header: 'Funded',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'age_at_index',
      header: 'Cost-to-date',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'ETC',
      header: 'Survival (days)',
      sort: 'asc',
      display: true,
    },
  ],
};

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
  subjectCountByProgram{
        group
        subjects
      }
    subjectCountByStudy{
        group
        subjects
      }
    subjectCountByDiagnoses{
        group
        subjects
      }
    subjectCountByRecurrenceScore{
        group
        subjects
      }
    subjectCountByTumorSize{
        group
        subjects
      }
    subjectCountByChemotherapyRegimen{
        group
        subjects
      }
    subjectCountByTumorGrade{
        group
        subjects
      }
  subjectCountByErStatus{
        group
        subjects
      }
  subjectCountByPrStatus{
        group
        subjects
      }
  subjectCountByMenopauseStatus{
        group
        subjects
      }
  subjectCountByChemotherapyRegimen{
        group
        subjects
      }
      subjectCountByEndocrineTherapy{
    group
    subjects
  }
  subjectCountByFileType{
    group
    subjects
}
subjectCountByFileAssociation {
    group
    subjects
}
subjectCountByTissueComposition{
    group
    subjects
}
subjectCountByTissueType{
    group
    subjects
}
    armsByPrograms {
        program
        caseSize
        children {
            arm
            caseSize
            size
        }
    }
    subjectOverViewPaged(first: 100) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_TABLE_DATA_QUERY = gql`{
  subjectOverViewPaged(first: 1000000) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;

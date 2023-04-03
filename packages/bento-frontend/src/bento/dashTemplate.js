import { sortType } from '../bento-core/FacetFilter/utils/Sort';
import { InputTypes } from '../bento-core/FacetFilter/components/inputs/Types';

const CASES = 'Cases';
const SAMPLES = 'Samples';
const FILES = 'Files';
const GROUP = 'group';

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  Cases: {
    isExpanded: true,
    hasSearch: true,
  },
  Samples: {
    isExpanded: true,
  },
  Files: {
    isExpanded: true,
  },
};

export const facetsConfig = [
  {
    section: CASES,
    label: 'Program',
    apiPath: 'subjectCountByProgram',
    apiForFiltering: 'filterSubjectCountByProgram',
    datafield: 'programs',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Arm',
    apiPath: 'subjectCountByStudy',
    apiForFiltering: 'filterSubjectCountByStudy',
    datafield: 'studies',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Diagnosis',
    apiPath: 'subjectCountByDiagnoses',
    apiForFiltering: 'filterSubjectCountByDiagnoses',
    datafield: 'diagnoses',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Recurrence Score',
    apiPath: 'subjectCountByRecurrenceScore',
    apiForFiltering: 'filterSubjectCountByRecurrenceScore',
    datafield: 'rc_scores',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.RANGE,
    show: true,
  },
  {
    section: CASES,
    label: 'Tumor Size',
    apiPath: 'subjectCountByTumorSize',
    apiForFiltering: 'filterSubjectCountByTumorSize',
    datafield: 'tumor_sizes',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.CUSTOM_NUMBER,
    show: true,
  },
  {
    section: CASES,
    label: 'Chemotherapy',
    apiPath: 'subjectCountByChemotherapyRegimen',
    apiForFiltering: 'filterSubjectCountByChemotherapyRegimen',
    datafield: 'chemo_regimen',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Tumor Grade',
    apiPath: 'subjectCountByTumorGrade',
    apiForFiltering: 'filterSubjectCountByTumorGrade',
    datafield: 'tumor_grades',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'ER Status',
    apiPath: 'subjectCountByErStatus',
    apiForFiltering: 'filterSubjectCountByErStatus',
    datafield: 'er_status',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'PR Status',
    apiPath: 'subjectCountByPrStatus',
    apiForFiltering: 'filterSubjectCountByPrStatus',
    datafield: 'pr_status',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Endocrine Therapy',
    apiPath: 'subjectCountByEndocrineTherapy',
    apiForFiltering: 'filterSubjectCountByEndocrineTherapy',
    datafield: 'endo_therapies',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Menopause Status',
    apiPath: 'subjectCountByMenopauseStatus',
    apiForFiltering: 'subjectCountByMenopauseStatus',
    datafield: 'meno_status',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: SAMPLES,
    label: 'Tissue Type',
    apiPath: 'subjectCountByTissueType',
    apiForFiltering: 'filterSubjectCountByTissueType',
    datafield: 'tissue_type',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: SAMPLES,
    label: 'Tissue Composition',
    apiPath: 'subjectCountByTissueComposition',
    apiForFiltering: 'subjectCountByTissueComposition',
    datafield: 'composition',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: FILES,
    label: 'File Association',
    apiPath: 'subjectCountByFileAssociation',
    apiForFiltering: 'filterSubjectCountByFileAssociation',
    datafield: 'association',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: FILES,
    label: 'File Type',
    apiPath: 'subjectCountByFileType',
    apiForFiltering: 'filterSubjectCountByFileType',
    datafield: 'file_type',
    field: GROUP,
    type: InputTypes.CHECKBOX,
    sort_type: sortType.ALPHABET,
    show: true,
  },
  {
    section: CASES,
    label: 'Age',
    apiPath: 'filterSubjectCountByAge',
    apiForFiltering: 'filterSubjectCountByAge',
    datafield: 'age_at_index',
    ApiLowerBoundName: 'lowerBound',
    ApiUpperBoundName: 'upperBound',
    show: true,
    slider: true,
    type: InputTypes.SLIDER,
    sort_type: 'none',
    minLowerBound: 0,
    maxUpperBound: 100,
    quantifier: 'Years',
  },
];

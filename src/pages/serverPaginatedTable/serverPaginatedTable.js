/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import CustomToolbar from './CustomToolbar';
import { CircularProgress, Typography } from '@material-ui/core';
import { CustomDataTable } from 'bento-components';


class Example extends React.Component {
  state = {
    page: 0,
    count: 1,
    rowsPerPage: 10,
    sortOrder: {},
    data: [['Loading Data...']],
    columns: [
      {
        name: 'subject_id',
        label: 'Case ID',
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            // Here you can render a more complex display.
            // You're given access to tableMeta, which has
            // the rowData (as well as the original object data).
            // See the console for a detailed look at this object.

            console.log('customBodyRender');
            return value;
          },
        },
      },
      {
        name: 'program',
        label: 'Program',
        options: {},
      },
      {
        name: 'program_id',
        label: 'program_id',
        options: {},
      },
      {
        name: 'study_acronym',
        label: 'Arm',
        options: {},
      },
      {
        name: 'diagnosis',
        label: 'Diagnosis',
        options: {},
      },
      {
        name: 'recurrence_score',
        label: 'Recurrence Score',
        options: {},
      },
      {
        name: 'tumor_size',
        label: 'Tumor Size (cm)',
        options: {},
      },
      {
        name: 'er_status',
        label: 'ER Status',
        options: {},
      },
      {
        name: 'pr_status',
        label: 'PR Status',
        options: {},
      },
      {
        name: 'age_at_index',
        label: 'Age (years)',
        options: {},
      },
      {
        name: 'survival_time',
        label: 'Survival (days)',
        options: {},
      },
    ],
    isLoading: false,
  };

  componentDidMount() {
    this.getData('', 0);
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.getData('', 0);
    }
  }

  // get data
  getData = (url, page) => {
    this.setState({ isLoading: true });
    this.xhrRequest(url, page).then((res) => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
    });
  }

  getSrcData = () => this.props.data;

  sort = (page, sortOrder) => {
    this.setState({ isLoading: true });
    this.xhrRequest('', page, sortOrder).then((res) => {
      this.setState({
        data: res.data,
        page: res.page,
        sortOrder,
        isLoading: false,
        count: res.total,
      });
    });
  }

  // mock async function
  xhrRequest = (url, page, sortOrder = {}) => new Promise((resolve, reject) => {
    // mock page data
    let fullData = this.getSrcData() !== {} ? this.getSrcData() : [{}];
    const total = fullData.length; // mock record count from server - normally this would be a number attached to the return data

    const sortField = sortOrder.name;
    const sortDir = sortOrder.direction;

    if (sortField) {
      fullData = fullData.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return 1 * (sortDir === 'asc' ? -1 : 1);
        } if (a[sortField] > b[sortField]) {
          return -1 * (sortDir === 'asc' ? -1 : 1);
        }
        return 0;
      });
    }

    const srcData = fullData.slice(page * this.state.rowsPerPage, (page + 1) * this.state.rowsPerPage);
    const data = srcData;

    setTimeout(() => {
      resolve({
        data, total, page,
      });
    }, 500);
  })

  changePage = (page, sortOrder) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`/myApiServer?page=${page}`, page, sortOrder).then((res) => {
      this.setState({
        isLoading: false,
        page: res.page,
        sortOrder,
        data: res.data,
        count: res.total,
      });
    });
  };

  updateData = (page, sortOrder) => {
    this.setState({
      isLoading: true,
    });
    this.setState({
      isLoading: false,
      data: this.getSrcData(),
    });
  };

  render() {
    const {
      data, page, count, isLoading, rowsPerPage, sortOrder, columns
    } = this.state;

    const options1 = {
      filterType: 'dropdown',
      responsive: 'stacked',
      serverSide: true,
      count,
      rowsPerPage,
      rowsPerPageOptions: [],
      sortOrder,
      onTableChange: (action, tableState) => {
        // console.log(action, tableState);

        // a developer could react to change on an action basis or
        // examine the state as a whole and do whatever they want

        switch (action) {
          case 'changePage':
            this.changePage(tableState.page, tableState.sortOrder);
            break;
          case 'sort':
            this.sort(tableState.page, tableState.sortOrder);
            break;
          default:
            console.log('action not handled.');
        }
      },
    };

    console.log('COLUMNS');
    console.dir(JSON.parse(JSON.stringify(this.state.columns)));

    return (
      <div>
        <CustomDataTable
          title={(
            <Typography variant="h6">
              Cases
              {isLoading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
            </Typography>
)}
          data={data}
          columns={columns}
          options={Object.assign({}, this.props.options, options1)}
        />
      </div>
    );
  }
}

export default Example;

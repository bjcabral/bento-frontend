import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import TaskOrderDetailView from './taskOrderDetailView';
import { Typography } from '../../components/Wrappers/Wrappers';
import { GET_TASK_ORDER_DETAIL_DATA_QUERY, dataRoot, taskOrderIDField } from '../../bento/taskOrderDetailData';

const TaskOrderDetailContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_TASK_ORDER_DETAIL_DATA_QUERY, {
    variables: { [taskOrderIDField]: match.params.id },
  });

  if (loading) return <CircularProgress />;
  if (error || !data || data[dataRoot][taskOrderIDField] !== match.params.id) {
    return (
      <Typography variant="h5" color="error" size="sm">
        {error ? `An error has occurred in loading stats component: ${error}` : 'Received wrong data'}
      </Typography>
    );
  }

  return <TaskOrderDetailView data={data[dataRoot]} />;
};

export default TaskOrderDetailContainer;

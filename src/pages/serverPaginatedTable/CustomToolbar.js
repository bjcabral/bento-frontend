/* eslint-disable */

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { withStyles } from '@material-ui/core/styles';

const defaultToolbarStyles = {
  iconButton: {
  },
};

class CustomToolbar extends React.Component {
  
  handleClick = (fullData) => {
    // console.log("clicked on icon!");
    // console.log(fullData);
  }

  render() {
    const { classes, fullData } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"custom icon"}>
          <IconButton className={classes.iconButton} onClick={()=>this.handleClick(fullData)}>
            <CheckBoxIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);
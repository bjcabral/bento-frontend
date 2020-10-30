import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  withStyles, Paper,
} from '@material-ui/core';
import { navBarstyling } from '../../../bento/navigationBarData';

const CustomDropdownMenu = ({ classes, handleClick, dropDownElements }) => (
  <>
    <Paper className={classes.paper}>
      <div id="aboutDropDown">
        {dropDownElements.map((dropDownElementsItem) => (
          <NavLink
            className={classes.link}
            activeStyle={{ color: '#27DBFF' }}
            to={dropDownElementsItem.link}
            onClick={handleClick}
          >
            {dropDownElementsItem.labelText}
          </NavLink>
        ))}
      </div>
    </Paper>
  </>
);

const styles = () => ({
  paper: {
    background: navBarstyling.dropDownMenu.background,
    width: navBarstyling.dropDownMenu.width,
    padding: navBarstyling.dropDownMenu.padding,
    position: navBarstyling.dropDownMenu.position,
    margin: navBarstyling.dropDownMenu.margin,
    borderRadius: navBarstyling.dropDownMenu.borderRadius,
  },
  link: {
    textDecoration: navBarstyling.dropDownLabelText.textDecoration,
    color: navBarstyling.dropDownLabelText.color,
    fontFamily: navBarstyling.dropDownLabelText.fontFamily,
    fontSize: navBarstyling.dropDownLabelText.fontSize,
    fontWeight: navBarstyling.dropDownLabelText.fontWeight,
    lineHeight: navBarstyling.dropDownLabelText.lineHeight,
    display: navBarstyling.dropDownLabelText.display,
    marginTop: navBarstyling.dropDownLabelText.marginTop,
    '&:hover': {
      cursor: navBarstyling.dropDownLabelText.hoverCursor,
      color: navBarstyling.dropDownLabelText.hoverColor,
    },
  },
});

export default withStyles(styles)(CustomDropdownMenu);

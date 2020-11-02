import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  withStyles, Paper,
} from '@material-ui/core';

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
    background: '#142D64',
    width: '170px',
    padding: '0px 16px 18px 22px',
    position: 'absolute',
    margin: '-5px 0px 0px 18px',
    borderRadius: '0',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '15px',
    fontWeight: '800',
    lineHeight: '12px',
    display: 'block',
    marginTop: '13px',
    '&:hover': {
      cursor: 'pointer',
      color: '#41A7FF',
    },
  },
});

export default withStyles(styles)(CustomDropdownMenu);

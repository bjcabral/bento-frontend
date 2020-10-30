import React from 'react';
import {
  withStyles,
} from '@material-ui/core';
import classnames from 'classnames';
import { globalStatsData as statsCount, statsStyling } from '../../bento/globalStatsData';

const StatsView = ({ classes, data }) => (
  <>
    <div className={classes.statsSection}>
      <div
        className={classes.box}
      >
        {statsCount.slice(0, 6).map((stat) => (
          <div className={classes.statsGroup}>
            <div className={classnames(classes.statsIconDefault, classes.statsIcon)}>
              <img
                src={stat.statIconSrc}
                alt={stat.statIconAlt}
              />
            </div>
            {
          statsStyling.global.statTitleFirst === true ? (
            <div>
              <div className={classes.statTitle}>
                {stat.statTitle}
              </div>
              <div className={classes.statCount}>
                {data[stat.statAPI]}
              </div>
            </div>
          )
            : (
              <div>
                <div className={classes.statCount}>
                  {data[stat.statAPI]}
                </div>
                <div className={classes.statTitle}>
                  {stat.statTitle}
                </div>
              </div>
            )
            }
          </div>
        ))}
      </div>
    </div>
  </>
);

const styles = () => ({
  statsSection: statsStyling.global.background ? {
    top: '139px',
    width: '100%',
    zIndex: 999,
    position: 'fixed',
    background: statsStyling.global.background,
    textAlign: 'center',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  } : {
    top: '139px',
    width: '100%',
    zIndex: 999,
    position: 'fixed',
    background: '#8DCAFF',
    textAlign: 'center',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  box: statsStyling.global.height ? {
    display: 'inline-flex',
    height: statsStyling.global.height,
    margin: '0 auto',
  } : {
    display: 'inline-flex',
    height: '47px',
    margin: '0 auto',
  },
  statTitle: statsStyling.statTitle ? statsStyling.statTitle : {
    float: 'left',
    color: '#062D4F',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '11px',
    letterSpacing: '1px',
    margin: '14px 8px 0px 0px',
    textTransform: 'uppercase',
  },
  statCount: statsStyling.global.horizontalStyle === true ? {
    display: 'inline-block',
    float: 'left',
    color: '#0467BD',
    fontFamily: 'Oswald',
    fontSize: '20px',
    margin: '6px 0px 0px 0px',
    fontWeight: 600,
  } : {
    color: '#0467BD',
    fontFamily: 'Oswald',
    fontSize: '20px',
    margin: '6px 0px 0px 0px',
    fontWeight: 600,
  },
  statsGroup: statsStyling.statGroup ? statsStyling.statGroup : {
    margin: '4px 32px',
  },
  statsIconDefault: {
    position: 'absolute',
    float: 'left',
    width: '28px',
    height: '28px',
    margin: '8px 0px 0px -35px',
  },
  statsIcon: statsStyling.statsIcon,
});

export default withStyles(styles, { withTheme: true })(StatsView);

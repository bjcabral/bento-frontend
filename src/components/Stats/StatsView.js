/* eslint-disable */
import React from 'react';
import { globalStatsData as statsCount, statsBarStyle } from '../../bento/globalStatsData';

import {
  withStyles,
} from '@material-ui/core';

const StatsView = ({ classes, data }) => (
  <>
    <div className={classes.statsSection}>
      <div
        className={classes.box}
      >
        {statsCount.slice(0, 6).map((stat) => (
          <div>
            {
          statsBarStyle == 'vertical' ? <div className={classes.verticalStatsGroup}>
            {console.log('vertical')}
            <div className={classes.verticalStatsIcon}>
              <img
                  src={stat.statIconSrc}
                  alt={stat.statIconAlt}
                />
            </div>
            <div className={classes.verticalStatsText}>
              <div className={classes.verticalStatTitle}>
                {stat.statTitle}
              </div>
              <div className={classes.verticalStatCount}>
                {data[stat.statAPI]}
              </div>
            </div>
          </div>
          : <div className={classes.statsGroup}>
            {console.log('horizontal')}
            <div className={classes.statsIcon}>
              <img
                  src={stat.statIconSrc}
                  alt={stat.statIconAlt}
                />
            </div>
          <div className={classes.statsText}>
            <div className={classes.statTitle}>
              {stat.statTitle}
            </div>
            <div className={classes.statCount}>
              {data[stat.statAPI]}
            </div>
          </div>
        </div>
        }
          </div>
        ))}
      </div>
    </div>
  </>
);

const styles = () => ({
  verticalStatsGroup: {
    padding: '9px 16px 12px 16px',
    height: '46px',
    maxWidth: '1440px',
    margin: 'auto',
  },
  verticalStatsIcon: {
    position: 'absolute',
    float: 'left',
    width: '28px',
    height: '28px',
  },
  verticalStatsText: {
    maxWidth: '1440px',
    margin: 'auto',
    float: 'left',
    marginLeft: '52px',
    marginBottom: '8px',
  },
  verticalStatCount: {
    marginTop: '1px',
  },
  statsSection: {
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
  bannerTexture: {
    color: '#4898B4',
    fontFamily: 'Raleway',
    fontSize: '19px',
    fontWeight: '600',
    lineHeight: '60px',
    textAlign: 'center',
    margin: '0 auto',
    letterSpacing: '0.050pt',
    textTransform: 'uppercase',
    width: '869px',
  },
  boxCut: {
    direction: 'ltr',
    display: 'inline-flex',
    borderBottom: '47px solid #8DCAFF',
    borderLeft: '50px solid transparent',
    height: '47px',
  },
  box: {
    direction: 'ltr',
    display: 'inline-flex',
    borderBottom: '47px solid #8DCAFF',
    height: '47px',
    margin: '0 auto',
  },
  statsText: {
    height: '42px',
  },
  statTitle: {
    display: 'inline-block',
    float: 'left',
    color: '#062D4F',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '11px',
    letterSpacing: '1px',
    marginRight: '8px',
    marginTop: '14px',
    textTransform: 'uppercase',
  },
  verticalStatTitle: {
    display: 'inline-block',
    float: 'left',
    color: '#062D4F',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '11px',
    letterSpacing: '1px',
    marginRight: '8px',
    textTransform: 'uppercase',
  },
  statCount: {
    display: 'inline-block',
    color: '#0467BD',
    fontFamily: 'Oswald',
    fontSize: '20px',
    marginTop: '4px',
    fontWeight: 600,
  },
  floatLeft: {
    float: 'left',
    marginTop: '3px',
    letterSpacing: '1px',
  },
  floatRight: {
    float: 'right',
    marginLeft: '6px',
    marginTop: '3px',
  },
  statsGroup: {
    // padding: '36px 48px 4px 48px',
    // borderBottom: '2px solid',
    margin: '4px 32px',
  },
  statsIcon: {
    position: 'absolute',
    float: 'left',
    width: '28px',
    height: '28px',
    marginTop: '8px',
    marginLeft: '-35px',
  },
});

export default withStyles(styles, { withTheme: true })(StatsView);

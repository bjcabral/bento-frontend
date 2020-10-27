import React from 'react';
import {
  withStyles,
} from '@material-ui/core';
import { globalStatsData as statsCount, statsStyling } from '../../bento/globalStatsData';

const StatsView = ({ classes, data }) => (
  <>
    <div className={classes.statsSection}>
      <div
        className={classes.box}
      >
        {statsCount.slice(0, 6).map((stat) => (
          <div>
            {
          statsStyling.global.style === 'vertical' ? (
            <div className={classes.verticalStatsGroup}>
              {console.log('vertical')}
              {console.log(statsStyling)}
              <div className={classes.verticalStatsIcon}>
                <img
                  src={stat.statIconSrc}
                  alt={stat.statIconAlt}
                />
              </div>
              <div className={classes.verticalStatsText}>
                <div className={classes.statTitle}>
                  {stat.statTitle}
                </div>
                <div className={classes.verticalStatCount}>
                  {data[stat.statAPI]}
                </div>
              </div>
            </div>
          )
            : (
              <div className={classes.statsGroup}>
                {console.log('horizontal')}
                {console.log(statsStyling.statTitle.float)}
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
            )
        }
          </div>
        ))}
      </div>
    </div>
  </>
);

const styles = () => ({
  statsSection: {
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
  },
  box: {
    direction: 'ltr',
    display: 'inline-flex',
    height: statsStyling.global.height,
    margin: '0 auto',
  },
  statsText: {
    height: '42px',
  },
  verticalStatsText: {
    maxWidth: '1440px',
    margin: 'auto',
    float: 'left',
    marginLeft: '52px',
    marginBottom: '8px',
  },
  statTitle: {
    display: statsStyling.statTitle.display,
    float: statsStyling.statTitle.float,
    color: statsStyling.statTitle.color,
    fontFamily: statsStyling.statTitle.fontFamily,
    fontWeight: statsStyling.statTitle.fontWeight,
    fontSize: statsStyling.statTitle.fontSize,
    letterSpacing: statsStyling.statTitle.letterSpacing,
    marginRight: statsStyling.statTitle.marginRight,
    marginTop: statsStyling.statTitle.marginTop,
    textTransform: statsStyling.statTitle.textTransform,
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
    display: statsStyling.statCount.display,
    color: statsStyling.statCount.color,
    fontFamily: statsStyling.statCount.fontFamily,
    fontSize: statsStyling.statCount.fontSize,
    marginTop: statsStyling.statCount.marginTop,
    fontWeight: statsStyling.statCount.fontWeight,
  },
  verticalStatCount: {
    marginTop: '1px',
  },
  statsGroup: {
    // padding: '36px 48px 4px 48px',
    // borderBottom: '2px solid',
    margin: statsStyling.statGroup.statsGroupmargin,
  },
  verticalStatsGroup: {
    padding: '9px 16px 12px 16px',
    height: '46px',
    maxWidth: '1440px',
    margin: 'auto',
  },
  statsIcon: {
    position: statsStyling.statsIcon.position,
    float: statsStyling.statsIcon.float,
    width: statsStyling.statsIcon.width,
    height: statsStyling.statsIcon.height,
    marginTop: statsStyling.statsIcon.marginTop,
    marginLeft: statsStyling.statsIcon.marginLeft,
  },
  verticalStatsIcon: {
    position: 'absolute',
    float: 'left',
    width: '28px',
    height: '28px',
  },
});

export default withStyles(styles, { withTheme: true })(StatsView);

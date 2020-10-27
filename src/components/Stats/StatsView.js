import React from 'react';
import {
  Grid,
  Paper,
  withStyles,
} from '@material-ui/core';
import { globalStatsData as statsCount, statsBarStyle } from '../../bento/globalStatsData';
import { Typography } from '../Wrappers/Wrappers';

const StatsView = ({ classes, data }) => (
  <>
    <div>
      { statsBarStyle === 'ctdc'
        ? (
          <Grid container className={classes.ctdcStatsContainer}>
            <Grid item xs={12}>
              <Paper className={classes.ctdcPaper}>
                <div id="stats_bar" container className={classes.ctdcStatsMaxWidth}>
                  {statsCount.slice(0, 6).map((stat) => (
                    <div className={classes.ctdcStatsGroup}>
                      <div className={classes.ctdcStatsIcon}>
                        <img
                          src={stat.statIconSrc}
                          alt={stat.statIconAlt}
                        />
                      </div>
                      <div className={classes.ctdcStatsText}>
                        <div className={classes.ctdcFloatLeft}>
                          <Typography weight="bold" size="sm" color="textWithBackground">
                            {stat.statTitle}
                            {' '}
                            {' '}
                          </Typography>
                        </div>
                        <div id="trials_count" className={classes.ctdcFloatRight}>
                          <Typography color="primary" weight="bold" size="sm">
                            {data[stat.statAPI]}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Paper>
            </Grid>
          </Grid>
        )
        : statsBarStyle === 'icdc'
          ? (
            <Grid container class={classes.statsContainer}>
              <Grid item xs={12}>
                <Paper className={classes.icdcPaper}>
                  <Grid container class={classes.statsMaxWidth}>
                    <Grid item xs={1} />
                    {statsCount.slice(0, 6).map((stat) => (
                      <Grid item xs={12} sm={4} md={2} lg={2}>
                        <div className={classes.icdcStatsGroup}>
                          <div className={classes.icdcStatsIcon}>
                            <img
                              src={stat.statIconSrc}
                              alt={stat.statIconAlt}
                            />

                          </div>
                          <div className={classes.icdcStatsText}>
                            <Typography weight="bold" size="md">
                              {' '}
                              {data[stat.statAPI]}
                            </Typography>
                            <div className={classes.icdcMarginTop1}>
                              <Typography color="primary" weight="bold">
                                {stat.statTitle}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    ))}
                    <Grid item xs={1} />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          )
          : statsBarStyle === 'bento'
            ? (
              <div className={classes.statsSection}>
                <div
                  className={classes.box}
                >
                  {statsCount.slice(0, 6).map((stat) => (
                    <div className={classes.statsGroup}>
                      <div className={classes.statsText}>
                        <div className={classes.statTitle}>
                          {stat.statTitle}
                        </div>
                        <div className={classes.statCount}>
                          {data[stat.statAPI]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
            : <></>}
    </div>
  </>
);

const styles = (theme) => ({
  ctdcStatsContainer: {
    position: 'fixed',
    width: '100%',
    zIndex: '999',
    top: '139px',
  },
  ctdcPaper: {
    background: theme.palette.deepSkyBlue.main,
    boxShadow: 'none',
    borderRadius: '0',
  },
  ctdcStatsGroup: {
    padding: '13px 48px 12px 48px',
    height: '46px',
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
  },
  ctdcStatsText: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    float: 'left',
    marginLeft: '32px',
    marginBottom: '8px',
  },
  ctdcStatsIcon: {
    position: 'absolute',
    float: 'left',
    width: '28px',
    height: '28px',
    marginTop: '-4px',
  },
  ctdcFloatLeft: {
    float: 'left',
    marginTop: '3px',
    letterSpacing: '1px',
  },
  ctdcFloatRight: {
    float: 'right',
    marginLeft: '6px',
    marginTop: '3px',
  },
  ctdcStatsMaxWidth: {
    display: 'flex',
    maxWidth: '700px',
    margin: '0 auto',
  },
  icdcPaper: {
    background: theme.palette.curiousBlue.main,
    boxShadow: 'none',
  },
  icdcStatsGroup: {
    padding: '9px 16px 12px 16px',
    height: '46px',
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
  },
  icdcStatsText: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    float: 'left',
    marginLeft: '52px',
    marginBottom: '8px',
  },
  icdcStatsIcon: {
    position: 'absolute',
    float: 'left',
    width: '45px',
    height: '45px',
  },
  icdcMarginTop1: {
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
  statCount: {
    display: 'inline-block',
    color: '#0467BD',
    fontFamily: 'Oswald',
    fontSize: '20px',
    marginTop: '4px',
    fontWeight: 600,
  },
  statsGroup: {
    margin: '4px 32px',
  },
});

export default withStyles(styles, { withTheme: true })(StatsView);

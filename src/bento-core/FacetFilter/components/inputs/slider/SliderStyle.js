export default () => ({
  sliderRoot: {
    marginTop: '10px',
    marginLeft: '20px',
    marginRight: 'Auto',
    width: '80%',
  },
  minValue: {
    fontFamily: 'Nunito',
    fontSize: '15px',
    color: '#000000',
    float: 'left',
    marginLeft: 'Auto',
    marginRight: 'Auto',
    marginBottom: '0px',
  },
  maxValue: {
    fontFamily: 'Nunito',
    fontSize: '15px',
    color: '#000000',
    float: 'right',
    marginLeft: 'Auto',
    marginRight: 'Auto',
    marginBottom: '0px',
  },
  rail: {
    borderRadius: 4,
    height: 6,
    background: '#A6A6A6',
  },
  thumb: {
    height: 16,
    width: 16,
    background: '#10A075',
  },
  track: {
    borderRadius: 4,
    height: 6,
    background: '#10A075',
    '&~&': {
      background: '#10A075',
    },
  },
  upperBound: {
    fontFamily: 'Nunito',
    fontSize: '10px',
    color: '#000000',
    float: 'right',
    marginLeft: 'Auto',
    marginRight: 'Auto',
    marginBottom: '15px',
  },
  lowerBound: {
    fontFamily: 'Nunito',
    fontSize: '10px',
    color: '#000000',
    float: 'left',
    marginLeft: 'Auto',
    marginRight: 'Auto',
    marginBottom: '15px',
  },
  sliderText: {
    marginTop: '1.5px',
    color: '#10a075',
    lineHeight: '120%',
    fontFamily: 'Nunito',
    fontSize: '14px',
    float: 'right',
  },
  sliderListItem: {
    marginRight: '12px',
  },
  listItemGutters: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px 5px 2px 8px',
  },
});

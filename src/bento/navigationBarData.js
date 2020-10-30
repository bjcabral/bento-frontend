export const navBarstyling = {
  global: {
    backgroundColor: '#142D64',
    height: '39px',
    padding: '9px 20px 0px 20px',
  },
  dropDownIcon: {
    displayIcon: true,
    fontSize: '18px',
    margin: '0px 0px 0px 0px',
  },
  dropDownMenu: {
    background: '#142D64',
    width: '170px',
    padding: '0px 16px 18px 22px',
    position: 'absolute',
    margin: '-5px 0px 0px 18px',
    borderRadius: '0',
  },
  dropDownLabelText: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Lato',
    fontSize: '15px',
    fontWeight: '800',
    lineHeight: '12px',
    display: 'block',
    marginTop: '13px',
    hoverCursor: 'pointer',
    hoverColor: '#41A7FF',
  },
  labelText: {
    activeLabel: '1px solid  #FFFFFF',
    textDecoration: 'none',
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    fontSize: '13px',
  },
  cartGroup: {
    position: 'absolute',
    right: '20px',
  },
  cartLabelText: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    fontSize: '13px',
  },
  cartIcon: {
    width: '22px',
    height: '22px',
    margin: '0px 0px 0px 6px',
  },
  cartCounter: {
    height: '16px',
    minWidth: '16px',
    fontWeight: '600',
    letterSpacing: '0.8px',
    transform: 'scale(1) translate(0%, -50%)',
  },
};

export const navBarData = [
// A maximum of 5 nav bar items are allowed
// A maximum of 9 dropDownLinks items are allowed
  {
    labelText: 'home',
    type: 'link',
    link: '/home',
  },
  {
    labelText: 'programs',
    type: 'link',
    link: '/programs',
  },
  {
    labelText: 'cases',
    type: 'link',
    link: '/cases',
  },
  {
    labelText: 'about',
    type: 'dropdown',
    dropDownLinks: [
      {
        labelText: 'Bento',
        link: '/bento',
      },
      {
        labelText: 'Resources',
        link: '/resources',
      },
      {
        labelText: 'Graphql',
        link: '/graphql',
      },
    ],
  },
];

export const navBarCartData = {
  cartLabel: 'MY Files',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/icons/Icon-Cart-Navbar.svg',
  cartIconAlt: 'cart_logo',
};

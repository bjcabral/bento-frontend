export const navBarstyling = {
  global: {
    backgroundColor: '#142D64',
    height: '39px',
    padding: '9px 20px 0px 20px',
  },
  dropDownIcon: {
    displayIcon: false,
    fontSize: '18px',
    margin: '0px 0px 0px 0px',
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
<<<<<<< HEAD
    labelText: 'projects',
    type: 'link',
    link: '/cases',
  },
  {
    labelText: 'Admin',
=======
    labelText: 'Projects',
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
    type: 'link',
    link: '/cases',
  },
  {
    labelText: 'about',
    type: 'dropdown',
    dropDownLinks: [
      {
        labelText: 'CTOS',
<<<<<<< HEAD
        link: '/bento',
      },
      {
        labelText: 'Bento',
=======
>>>>>>> 4e15afa73bcb46ef91b2abdef61dfbc8c43a746d
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

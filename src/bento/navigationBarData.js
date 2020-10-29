export const styles = {
  background: '#FFFF',
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

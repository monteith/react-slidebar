export default {
  name: 'Home',
  children: [
    {
      name: 'With Children',
      children: [
        {
          name: 'Menu a',
          children: [
            {
              name: 'Menu d',
              children: [
                { name: 'Menu g' },
                { name: 'Menu h' },
                { name: 'Menu i' }
              ]
            },
            {
              name: 'Menu e',
              children: [
                { name: 'Menu g' },
                { name: 'Menu h' },
                { name: 'Menu i' }
              ]
            },
            {
              name: 'Menu f',
              children: [
                { name: 'Menu g' },
                { name: 'Menu h' },
                { name: 'Menu i' }
              ]
            }
          ]
        }
      ]
    },
    { name: 'No children' },
    { name: 'Also no children' }
  ]
}

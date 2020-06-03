const callback = (item) => alert(item.name)

export default {
  name: 'Home',
  children: [
    {
      name: 'With Children (and callback)',
      callback,
      children: [
        {
          name: 'Menu a',
          children: [
            {
              name: 'Menu d',
              children: [
                { name: 'Menu g', callback },
                { name: 'Menu h', callback },
                { name: 'Menu i', callback }
              ]
            },
            {
              name: 'Menu e',
              children: [
                { name: 'Menu g', callback },
                { name: 'Menu h', callback },
                { name: 'Menu i', callback }
              ]
            },
            {
              name: 'Menu f',
              children: [
                { name: 'Menu g', callback },
                { name: 'Menu h', callback },
                { name: 'Menu i', callback }
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

import React from 'react'

function ExampleComponent({ name, uuid }) {
  return (
    <h1>
      {name} - {uuid}
    </h1>
  )
}

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
                { name: 'Menu g', component: ExampleComponent },
                { name: 'Menu h', component: ExampleComponent },
                { name: 'Menu i', component: ExampleComponent }
              ]
            },
            {
              name: 'Menu e',
              children: [
                { name: 'Menu g', component: ExampleComponent },
                { name: 'Menu h', component: ExampleComponent },
                { name: 'Menu i', component: ExampleComponent }
              ]
            },
            {
              name: 'Menu f',
              children: [
                { name: 'Menu g', component: ExampleComponent },
                { name: 'Menu h', component: ExampleComponent },
                { name: 'Menu i', component: ExampleComponent }
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

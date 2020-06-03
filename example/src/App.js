import React from 'react'
import Slidebar from 'react-slidebar'

const menuItems = {
  name: 'Home',
  children: [
    {
      name: 'Menu 1',
      children: [
        {
          name: 'Menu a',
          children: [
            { name: 'Menu d', children: [] },
            {
              name: 'Menu e',
              children: [
                { name: 'Menu g' },
                { name: 'Menu h' },
                { name: 'Menu i' }
              ]
            },
            { name: 'Menu f', children: [] }
          ]
        },
        { name: 'Menu b', children: [] },
        { name: 'Menu c', children: [] }
      ]
    },
    { name: 'Menu 2', children: [] },
    { name: 'Menu 3', children: [] },
    { name: 'Menu 4', children: [] }
  ]
}

const Layout = () => (
  <>
    <header>
      <h1>Examples</h1>
    </header>
    <main>
      <section>
        <article>
          <h2>Basic Example</h2>
          <div className='example-wrapper'>
            <Slidebar rootNode={menuItems} />
          </div>
        </article>
      </section>
    </main>
  </>
)

const App = () => {
  return <Layout />
}

export default App

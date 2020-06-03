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
            { name: 'Menu d', callback: (item) => console.log(item.name) },
            {
              name: 'Menu e',
              children: [
                { name: 'Menu g', component: () => <h1>Menu G</h1> },
                { name: 'Menu h', component: () => <h1>Menu H</h1> },
                { name: 'Menu i', component: () => <h1>Menu I</h1> }
              ]
            },
            { name: 'Menu f', callback: (item) => console.log(item.name) }
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
            <Slidebar
              rootNode={menuItems}
              callbacks={{
                before: (item) => console.log('before', item.name),
                after: (item) => console.log('after', item.name)
              }}
            />
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

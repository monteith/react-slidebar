import React from 'react'
import Slidebar from 'react-slidebar'

import exampleBasic from './data/example-basic'
import exampleWithComponents from './data/example-with-components'
import exampleWithCallback from './data/example-with-callback'

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
            <Slidebar rootNode={exampleBasic} />
          </div>
          <h3>Component Props</h3>
          <pre>
            <code>{`

  <Slidebar rootNode={rootNode} />
            
            `}</code>
          </pre>
          <h3>
            Example <code>rootNode</code> object:
          </h3>
          <pre>
            <code>
              {`
  {
    name: "Root"
    children: [
      ...
      {
        name: "Example node",
        children: [{ ... }, { ... }] />
      }
      ...
    ]
  }
              `}
            </code>
          </pre>
        </article>
      </section>
      <section>
        <article>
          <h2>Example with Components</h2>
          <div className='example-wrapper'>
            <Slidebar rootNode={exampleWithComponents} />
          </div>
          <h3>Component Props</h3>
          <pre>
            <code>{`

  <Slidebar rootNode={rootNode} />
            
            `}</code>
          </pre>
          <h3>
            Example <code>rootNode</code> object:
          </h3>
          <pre>
            <code>
              {`
  {
    name: "Root"
    children: [
      ...
      {
        name: "Example node",
        component: ({...itemProps}) => <MyComponent {...itemProps} />
      }
      ...
    ]
  }
              `}
            </code>
          </pre>
        </article>
      </section>
      <section>
        <article>
          <h2>Example with Callback on Item</h2>
          <div className='example-wrapper'>
            <Slidebar rootNode={exampleWithCallback} />
          </div>
          <h3>Component Props</h3>
          <pre>
            <code>{`

  <Slidebar rootNode={rootNode} />
            
            `}</code>
          </pre>
          <h3>
            Example <code>rootNode</code> object:
          </h3>
          <pre>
            <code>
              {`
  {
    name: "Root"
    children: [
      ...
      {
        name: "Example node",
        callback: (item) => alert(item.name)
      }
      ...
    ]
  }
              `}
            </code>
          </pre>
        </article>
      </section>
      <section>
        <article>
          <h2>Example with Callback on Transitions</h2>
          <div className='example-wrapper'>
            <Slidebar
              rootNode={exampleBasic}
              options={{
                callbacks: {
                  before: (item) => alert(`before, ${item.name}`),
                  after: (item) => alert(`after, ${item.name}`)
                }
              }}
            />
          </div>
          <h3>Component Props</h3>
          <pre>
            <code>{`
  const options = {
    callbacks: {
      before: (item) => alert(item.name),
      after: (item) => alert(item.name)
    }
  }

  <Slidebar rootNode={rootNode} options={options} />
            
            `}</code>
          </pre>
        </article>
      </section>
      <section>
        <article>
          <h2>Example with Class Names</h2>
          <div className='example-wrapper'>
            <Slidebar
              rootNode={exampleBasic}
              options={{
                classNames: {
                  Slidebar: 'custom-class another-custom-class',
                  Toolbar: 'custom-toolbar-class another-custom-toolbar-class'
                }
              }}
            />
          </div>
          <h3>Component Props</h3>
          <pre>
            <code>{`
  const options = {
    classNames: {
      Slidebar: 'custom-class another-custom-class',
      Toolbar: 'custom-toolbar-class another-custom-toolbar-class'
    }
  }

  <Slidebar rootNode={rootNode} options={options} />
            
            `}</code>
          </pre>
        </article>
      </section>
    </main>
  </>
)

const App = () => {
  return <Layout />
}

export default App

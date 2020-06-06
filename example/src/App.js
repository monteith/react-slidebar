import React from 'react'
import Slidebar, {
  SlidebarItems,
  SlidebarPage,
  SlidebarNode,
  SlidebarHeader
} from 'react-slidebar'

// eslint-disable-next-line no-unused-vars
function PagesExample() {
  return (
    <Slidebar>
      <SlidebarHeader />
      <SlidebarItems>
        <SlidebarPage title='Page 1'>
          <h1>hi</h1>
          <SlidebarPage.BackButton />
          <SlidebarPage.NextButton />
        </SlidebarPage>
        <SlidebarPage title='Page 2'>
          <h1>hello</h1>
          <SlidebarPage.BackButton />
          <SlidebarPage.NextButton />
        </SlidebarPage>
        <SlidebarPage title='Page 3'>
          <h1>how are you</h1>
          <SlidebarPage.BackButton />
          <SlidebarPage.NextButton />
        </SlidebarPage>
      </SlidebarItems>
    </Slidebar>
  )
}

function NodesExample() {
  return (
    <Slidebar>
      <SlidebarHeader />
      <SlidebarItems title='home'>
        <SlidebarNode title='a'>
          <SlidebarNode title='a1'>
            <SlidebarNode title='a2'>
              <SlidebarNode title='d' />
              <SlidebarNode title='e' />
            </SlidebarNode>
          </SlidebarNode>
        </SlidebarNode>
        <SlidebarNode title='b'>
          <SlidebarNode title='f' />
          <SlidebarNode title='g' />
        </SlidebarNode>
        <SlidebarNode title='c'>
          <SlidebarNode title='h' />
          <SlidebarNode title='i' />
        </SlidebarNode>
      </SlidebarItems>
    </Slidebar>
  )
}

function Layout() {
  return (
    <>
      <header>
        <h1>Examples</h1>
      </header>
      <main>
        <section>
          <article>
            <NodesExample />
          </article>
        </section>
      </main>
    </>
  )
}

function App() {
  return <Layout />
}

export default App

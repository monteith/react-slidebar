import { arrayOf, object, shape, string } from 'prop-types'
import React, { useMemo } from 'react'
import SlideBarComponent from './components/Slidebar'
import { assignUuids } from './helpers/assignUuids'

SlideBar.propTypes = {
  rootNode: shape({
    name: string.isRequired,
    children: arrayOf(object)
  }).isRequired
}

function SlideBar({ rootNode }) {
  if (!rootNode || !rootNode.children) {
    throw new Error(
      `react-slidebar: prop "rootNode" should be an object with a "children" attribute`
    )
  }

  const itemsWithUuid = useMemo(() => assignUuids(rootNode))

  return <SlideBarComponent rootNode={itemsWithUuid} />
}

export default SlideBar

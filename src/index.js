import React, { useMemo } from 'react'
import Slidebar from './components/Slidebar'
import { assignUuids } from './helpers/assignUuids'

export default function ({ rootNode, callbacks }) {
  if (!rootNode || !rootNode.children) {
    throw new Error(
      `react-slidebar: prop "rootNode" should be an object with a "children" attribute`
    )
  }
  const itemsWithUuid = useMemo(() => assignUuids(rootNode))
  return <Slidebar rootNode={itemsWithUuid} callbacks={callbacks} />
}

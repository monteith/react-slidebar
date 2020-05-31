import React, { useMemo } from 'react'
import Slidebar from './components/Slidebar'
import { assignUuids } from './helpers/assignUuids'

export default function ({ menuItems }) {
  if (!menuItems || !menuItems.children) {
    throw new Error(
      `react-slidebar: prop "menuItems" should be an object with a "children" attribute`
    )
  }

  const itemsWithUuid = useMemo(() => assignUuids(menuItems))

  return <Slidebar menuItems={itemsWithUuid} />
}

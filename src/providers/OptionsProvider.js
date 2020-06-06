import { merge } from 'lodash'
import React, { createContext, useContext } from 'react'

const OptionsContext = createContext()

const defaultOptions = {
  onSelection: null,
  onClose: null,
  toolbar: {
    linkBreadcrumbs: true,
    showCloseButton: true,
    showBackButton: true,
    showHistory: true,
    showActiveInHistory: true,
    historySeparator: null
  }
}

function OptionsProvider({ options, type, children }) {
  const combinedOptions = merge(defaultOptions, options)
  return (
    <OptionsContext.Provider value={combinedOptions}>
      {children}
    </OptionsContext.Provider>
  )
}

export function useOptionsContext() {
  return useContext(OptionsContext)
}

export default OptionsProvider

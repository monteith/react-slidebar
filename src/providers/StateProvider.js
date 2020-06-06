import React, { createContext, useContext, useMemo, useState } from 'react'
import findNodeByUuid from '../helpers/findNodeByUuid'

const StateContext = createContext()

const defaultState = {
  history: [],
  direction: 'forward'
}

function StateProvider({ nodeTree, type, ...props }) {
  let activeNode, history

  if (type === 'pages') {
    activeNode = nodeTree.props.children[0]
    history = [activeNode]
  }

  if (type === 'nodes') {
    history = [nodeTree]
    activeNode = nodeTree
  }

  const [state, setState] = useState({
    ...defaultState,
    history,
    nodeTree,
    activeNode
  })

  const initialState = useMemo(() => [state, setState], [state, setState])

  return <StateContext.Provider value={initialState} {...props} />
}

export function useStateContext() {
  const [state, setState] = useContext(StateContext)

  function gotoNode(uuid) {
    const activeNode = findNodeByUuid(state.nodeTree, uuid)

    setState({
      ...state,
      direction: 'forward',
      history: [...state.history, activeNode],
      activeNode
    })
  }

  function getPrevNode() {
    if (state.history.length <= 2) {
      return state.history[0]
    }
    const [prevNode] = state.history.slice(-2, -1)
    return prevNode
  }

  function gotoPrevNode() {
    const newHistory = [...state.history]
    newHistory.pop()
    const [prevNode] = newHistory.slice(-1)

    setState({
      ...state,
      history: newHistory,
      direction: 'backward',
      activeNode: prevNode || state.nodeTree
    })
  }

  function gotoVisited(node) {
    const nodeIndex = state.history.findIndex(
      (child) => child.props._uuid === node.props._uuid
    )

    if (nodeIndex < 0) {
      throw new Error(`Node ${nodeIndex} not found`)
    }

    setState({
      ...state,
      history: [...state.history].slice(0, nodeIndex + 1),
      direction: 'backward',
      activeNode: node
    })
  }

  function gotoNextPage() {
    const {
      props: { children }
    } = state.nodeTree

    const currentIndex = children.findIndex(
      (child) => child.props._uuid === state.activeNode.props._uuid
    )

    if (currentIndex < 0) {
      throw new Error("Could not find activeNode in root element's children")
    }

    if (React.Children.count(children) <= currentIndex + 1) {
      throw new Error('There are no more pages after the active page')
    }

    const nextPage = React.Children.toArray(children)[currentIndex + 1]

    if (!nextPage) {
      throw new Error('Could not find next page')
    }

    setState({
      ...state,
      direction: 'forward',
      history: [...state.history, nextPage],
      activeNode: nextPage
    })
  }

  return {
    state,
    setState,
    gotoNode,
    getPrevNode,
    gotoPrevNode,
    gotoPrevPage: gotoPrevNode,
    gotoNextPage,
    gotoVisited
  }
}

export default StateProvider

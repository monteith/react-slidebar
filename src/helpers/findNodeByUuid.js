import React from 'react'

function findNodeByUuid(rootNode, uuid) {
  let result

  if (!React.isValidElement(rootNode) || !rootNode.props.children) {
    return
  }

  result =
    rootNode.props.children
      .filter((node) => React.isValidElement(node))
      .find((node) => {
        return node.props._uuid === uuid
      }) || result

  if (!result) {
    rootNode.props.children.forEach((node) => {
      result = findNodeByUuid(node, uuid) || result
    })
  }

  return result
}

export default findNodeByUuid

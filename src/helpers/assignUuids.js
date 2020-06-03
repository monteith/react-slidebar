function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0
    var v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function assignUuids(rootNode) {
  const result = { ...rootNode, uuid: uuid() }

  if (!rootNode.children) {
    return result
  }

  result.children = rootNode.children.map((child) => assignUuids(child))

  return result
}

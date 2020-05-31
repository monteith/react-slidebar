import { arrayOf, object, shape, string } from 'prop-types'

const nodeShape = {
  name: string.isRequired,
  uuid: string.isRequired,
  children: arrayOf(object)
}

export const nodeType = shape(nodeShape).isRequired


import { stvStore } from './store/stvStore'
import preparedActions from './actions/preparedActions'

const { registerModule, addValidatedField, updateValidity } = preparedActions

const api = () =>
  ({ ready })

const requiredAttributes = ['required']

const ready = () =>
  Array.from(document.querySelectorAll('[validated-field]'))
    .filter(node => requiredAttributes.find(attribute => node.hasAttribute(attribute)))
    .forEach(createValidatedField)

const createValidatedField = node => {
  const { id } = node
  const fieldValidation = getFieldValidation({ id, preventDefault: true })
  addValidatedField({ node, id })
  node.addEventListener('keyup', fieldValidation)
}

const getFieldValidation = ({ id, preventDefault }) => evt => {
  preventDefault && evt.preventDefault()
  const field = stvStore.getState().validatedFields
    .find(field => field.id === id)

  const isValid = isFieldValid(field)

  if (isValid !== field.isValid) updateValidity({ id, isValid })
}

const isFieldValid = field =>
  field.node.value.length > 0

registerModule({ id: 'validatedFields', api })

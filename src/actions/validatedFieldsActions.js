
export const addValidatedField = ({ id, node }) =>
  ({
    type: 'ADD_VALIDATED_FIELD',
    id,
    node
  })

export const updateValidity = ({ id, isValid }) =>
  ({
    type: 'UPDATE_VALIDITY',
    id,
    isValid
  })
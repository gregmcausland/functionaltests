
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_VALIDATED_FIELD':
      return [...state, { id: action.id, node: action.node, isValid: false }]
    case 'UPDATE_VALIDITY':
      return [
        ...state.filter(field => field.id !== action.id),
        {
          ...state.find(field => field.id === action.id),
          isValid: action.isValid
        }
      ]
    default:
      return state
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_MODULE':
      if (action.id && action.api) return {
          ...state,
          [action.id]: { id: action.id, api: action.api(), hasRun: false, inject: action.inject || [] }
        }
    case 'DEREGISTER_MODULE':
      if (action.id) return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((newState, key) => ({...newState, [key]: state[key] }), {})
    case 'MODULE_HAS_RUN':
      if (action.id) return {
        ...state,
        [action.id]: { ...state[action.id], hasRun: true }
      }
    default:
      return state
  }
}
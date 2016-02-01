
export const registerModule = ({ id, api, inject }) =>
  ({
    type: 'REGISTER_MODULE',
    id,
    api,
    inject
  })

export const deRegisterModule = id =>
  ({
    type: 'DEREGISTER_MODULE',
    id
  })

export const moduleHasRun = id =>
  ({
    type: 'MODULE_HAS_RUN',
    id
  })
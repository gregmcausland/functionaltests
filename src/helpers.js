import preparedActions from './actions/preparedActions'

const { registerModule } = preparedActions

const api = () =>
  ({ log })

const log = msg =>
  console.warn(msg)

registerModule({ id: 'helpers', api })

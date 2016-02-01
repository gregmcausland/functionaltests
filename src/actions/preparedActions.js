
import { prepareActions } from '../store/stvStore'

import * as moduleActions from './moduleActions'
import * as validatedFieldsActions from './validatedFieldsActions'

export default prepareActions({
  ...moduleActions,
  ...validatedFieldsActions
})
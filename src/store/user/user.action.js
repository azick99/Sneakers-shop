import { createActon } from '../../utils/reducer/reducer.utils'
import { USER_ACTION_TYPES } from './user.types'

export const setCurrentUser = (user) =>
  createActon(USER_ACTION_TYPES.SET_CURRENT_USER, user)

import { combineReducers } from 'redux'
import playlist from './playlist/reducers'
import meta from './meta/reducers'

export const rootReducer = combineReducers({ playlist, meta })

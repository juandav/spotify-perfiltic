import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import * as types from './action-types'

const INITIAL_STATE = {
  error: null,
  data: [],
  loading: false
}

const fetchTracksSuccess = (state, { payload }) => {
  const data = update(state.data, { $set: [...payload] })
  return ({
    ...state,
    data
  })
}
const fetchTracksError = (state, error) => ({ ...state, error })
const setTracksloading = (state, { payload: loading }) => ({ ...state, loading })

export default handleActions({
  [types.FETCH_TRACKS_SUCCESS]: fetchTracksSuccess,
  [types.FETCH_TRACKS_ERROR]: fetchTracksError,
  [types.FETCH_TRACKS_LOADING]: setTracksloading
}, INITIAL_STATE)

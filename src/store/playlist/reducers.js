import { handleActions } from 'redux-actions'
import * as types from './action-types'

const INITIAL_STATE = {
  error: null,
  data: [],
  loading: false
}

export default handleActions({
  [types.GET_PLAYLIST_SUCCESS]: getPlaylistSuccess,
  [types.GET_PLAYLIST_ERROR]: getPlaylistError,
  [types.GET_PLAYLIST_LOADING]: setPaylistloading
}, INITIAL_STATE)

function getPlaylistSuccess (state, action) {
  const { payload } = action
  return {
    ...state,
    data: payload
  }
}
function getPlaylistError (state, error) {
  return {
    ...state,
    error
  }
}
function setPaylistloading (state, loading) {
  return {
    ...state,
    loading
  }
}

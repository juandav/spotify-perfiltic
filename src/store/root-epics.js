import { combineEpics } from 'redux-observable'
import { playlistEpics } from './playlist/epics'

export const rootEpic = combineEpics(playlistEpics)

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PlaylistComponent from './playlist'
import { fetchPlaylist } from '../../../store/playlist/actions'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { toggleTimeline } from '../../../store/meta/actions'

const Playlist = ({
  data,
  error,
  loading,
  isOpenTimeLine,
  fetchPlaylist,
  toggleTimeline
}) => {
  const [token] = useLocalStorage('token', '')

  useEffect(() => {
    fetchPlaylist(token)
  }, [])

  const onToggle = () => toggleTimeline(!isOpenTimeLine)

  return (
    loading
      ? <h1>Cargando...</h1>
      : error
        ? <h1>Error</h1>
        : (
          <PlaylistComponent
            data={data}
            token={token}
            isOpenTimeLine={isOpenTimeLine}
            onToggle={onToggle}
          />
        )
  )
}

const mapStateToProps = ({
  playlist: { data, error, loading },
  meta: { isOpenTimeLine }
}) => ({
  data,
  error,
  loading,
  isOpenTimeLine
})
const mapDispatchToProps = ({ fetchPlaylist, toggleTimeline })

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)

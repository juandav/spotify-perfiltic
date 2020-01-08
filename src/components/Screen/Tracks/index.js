import React from 'react'
import { connect } from 'react-redux'
import TracksComponent from './tracks'

const Tracks = ({
  data,
  error,
  loading
}) => {
  return (
    loading
      ? <h1>Cargando...</h1>
      : error
        ? <h1>Error</h1>
        : (
          <>
            <h1>Tracks</h1>
            <TracksComponent data={data} />
          </>
        )
  )
}

const mapStateToProps = ({
  tracks: { data, error, loading }
}) => ({
  data,
  error,
  loading
})
const mapDispatchToProps = null // ({  })

export default connect(mapStateToProps, mapDispatchToProps)(Tracks)

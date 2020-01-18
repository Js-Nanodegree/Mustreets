import React, { useState, useEffect } from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'redhooks'
import { screenSize } from 'Helper'

const effect = () => {
  return 'state'
}
const cleanup = () => {
  return 'state'
}

const Header = props => {
  const { profile, profileReducer } = props
  const [state, setState] = useState('')
  console.log(profile, profileReducer)

  // useEffect(() => {
  //   effect()
  //   return () => {
  //     cleanup()
  //   }
  // }, [state])

  return (
    <Container>
      <div>
        <button type='button' onClick={() => setState(1)}>
          Button
        </button>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  profile: state.counter,
})
const mapDispatchToProps = dispatch => ({
  profileReducer: ({ action, payload }) =>
    dispatch({ type: action, payload }),
})

Header.propTypes = {
  profile: PropTypes.object,
  profileReducer: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

const Container = styled.div`
  width: screenSize.width;
  height
`

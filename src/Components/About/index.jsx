import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'redhooks'
import screenSize from 'Helper'

const Header = props => {
  const { profileReducer } = props

  console.log({ screenSize })

  // const [state, setState] = useState('')
  // console.log(profile, profileReducer)

  // useEffect(() => {
  //   effect()
  //   return () => {
  //     cleanup()
  //   }
  // }, [state])

  return (
    <Container>
      <div>
        <button
          type='button'
          onClick={() => {
            profileReducer({ action: 'ADD', payload: 'State' })
          }}
        >
          Button
        </button>
      </div>
    </Container>
  )
}

// const mapStateToProps = state => ({
//   profile: state.counter,
// })
const mapDispatchToProps = dispatch => ({
  profileReducer: ({ action, payload }) =>
    dispatch({ type: action, payload }),
})

const { width, height } = screenSize

const Container = styled.div`
  /* width: width;
  height: height; */
  background: red;
`

Header.propTypes = {
  // profile: PropTypes.object,
  profileReducer: PropTypes.func,
}
export default connect(null, mapDispatchToProps)(Header)

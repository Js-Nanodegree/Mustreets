import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'redhooks'
import Rose from 'Assets/Svg/Rose.svg'
// import SVG from 'react-inlinesvg'
// import { ReactSVG } from 'react-svg'
import SVG from 'react-inlinesvg';


// const Icon = () =>

// const Logo = () => {
//   return <Icon />
// }

const Header = props => {
  const { profile, profileReducer } = props
  console.log({ profile })
  return (
    <Container>
      <WrapperUI>
        <SVG
          src='../../Assets/Svg/Rose.svg'
          style={{ width: '200px', height: '200px' }}
        />
        <div>
          <ButtonUI
            type='button'
            onClick={() => {
              profileReducer({ action: 'ADD', payload: 'State' })
            }}
          >
            Button
          </ButtonUI>
        </div>
      </WrapperUI>
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

const WrapperUI = styled.div`
  /* display: flex; */
  /* justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 50px 250px 150px;
  grid-auto-rows: minmax(55px, auto);
  grid-column-gap: 10px; */
`

const Container = styled.div`
  width: 100%;
  height: 55px;
  background: red;
`

const ButtonUI = styled.button``

Header.propTypes = {
  profile: PropTypes.number,
  profileReducer: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'redhooks'
import KeyImage from 'Assets/Svg/Rose.svg'
// import SVG from 'react-inlinesvg'
import SVG from 'react-inlinesvg'
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
        <Logo src={KeyImage} classNames='b-apikey' />
        <ButtonUI
          type='button'
          classNames='b-threed'
          onClick={() => {
            profileReducer({ action: 'ADD', payload: 'State' })
          }}
        >
          Button
        </ButtonUI>
      </WrapperUI>
    </Container>
  )
}

const Logo = styled(SVG)`
  width: 60px;
  height: 60px;
`

const mapStateToProps = state => ({
  profile: state.counter,
})
const mapDispatchToProps = dispatch => ({
  profileReducer: ({ action, payload }) =>
    dispatch({ type: action, payload }),
})

const WrapperUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 50px 250px 150px;
  grid-auto-rows: 55px 55px 55px;
  grid-column-gap: 10px;

  &:hover {
    background-color: bisque;
  }

  .b-apikey {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-start: 1;
  }
  .b-threed {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-start: 3;
  }
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

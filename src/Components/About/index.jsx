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
        <div className='b-apikey'>
          <Logo src={KeyImage} />
        </div>
        <div>
          <Title>ROSE COIN</Title>
        </div>
        <div className='b-threed'>
          <ButtonUI
            type='button'
            onClick={() => {
              profileReducer({ action: 'ADD', payload: 'State' })
            }}
          >
            WATCH VIDEO
          </ButtonUI>
          <ButtonUI
            type='button'
            onClick={() => {
              profileReducer({ action: 'ADD', payload: 'State' })
            }}
          >
            LEARN MORE
          </ButtonUI>
        </div>
      </WrapperUI>
      <MenuWrapper>
        <div>
          <MenuCard>What is Cosmos ?</MenuCard>
        </div>
      </MenuWrapper>
    </Container>
  )
}

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  justify-content: space-around;
  font-size: 32px;
  color: #fff;
  border-color: #000;
  border-width: 1px;
  font-family: 'Righteous', serif;
`

const MenuWrapper = styled.div`
  width: 450px;
  background: red;
  height: 450px;
  display: flex;
`

const MenuCard = styled.div`
  text-align: center;
  padding: 15px;
`

const mapStateToProps = state => ({
  profile: state.counter,
})
const mapDispatchToProps = dispatch => ({
  profileReducer: ({ action, payload }) =>
    dispatch({ type: action, payload }),
})

const WrapperUI = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;

  &:hover {
    background-color: bisque;
  }
  .b-apikey {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-start: 1;
  }
  .b-threed {
    display: flex;
    justify-content: space-around;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-start: 1;
  }
`
const Logo = styled(SVG)`
  width: 60px;
  height: 60px;
`

const Container = styled.div`
  width: 100%;
  background: #161931;
`

const ButtonUI = styled.button`
  height: 3rem;
  font-family: 'Righteous';
  width: 10rem;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #ffff;
  border-color: #99f;
  border-width: 2px;
  background: #99f;
  border-radius: 5px;
`

Header.propTypes = {
  profile: PropTypes.number,
  profileReducer: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

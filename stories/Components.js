import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = ({ title, size }) => {
  // const { title } = props
  console.log(size)
  return (
    <Components>
      <TextTitle size={size}>{title}</TextTitle>
      <div className='b-keys' />
    </Components>
  )
}

const Components = styled.div`
  /* height: 15px; */
  &:hover {
    .b-keys {
      width: 100%;
      height: 4px;
      background: #293241;
      border-radius: 50px 50px 0 0;
      border-width: 1px;
    }
  }
`
const TextTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: ${props => props.size};
  text-align: center;
  letter-spacing: 0.0045em;
  color: ${props => (props.size === '16px' ? '#000' : '#443288')};

  &:hover {
    color: #000;
    font-size: 16px;
  }
`

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
}

export default Title

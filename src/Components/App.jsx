import React from 'react'
import styled from 'styled-components'

const App = () => {
  const name = 'Button'
  return (
    <Button>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
    </Button>
  )
}

const Button = styled.div``

export default App

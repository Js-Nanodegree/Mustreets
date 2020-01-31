import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
import styled from 'styled-components'
import Title from './Components'

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)

export const Emoji = () => (
  <Wrapper>
    <Container onClick={action('clicked')}>
      <div className='b-class-line'>
        <Title title='TenzerFlow' size='15px' />
        <Title title='For JavaScript' size='15px' />
        <Title title='For Mobile & IoT' size='15px' />
        <Title title='For Production' size='15px' />
      </div>
      <span className='b-class-line-bottom' />
      <div className='b-class-line_text'>
        The core open source library to help you develop and train ML
        models. Get started quickly by running Colab notebooks
        directly in your browser.
      </div>
      <div className='b-class-button__starter'>Get Starter</div>
    </Container>
  </Wrapper>
)

Emoji.story = {
  name: 'with emoji',
}

const Container = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid #443288;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  background: #fff;
  padding: 30px;
  flex-direction: column;

  .b-class-line {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 42px;
  }

  .b-class-line-bottom {
    display: flex;
    width: 100%;
    height: 2px;
    background: #343434;
    align-self: flex-end;
    justify-content: center;
    border-radius: 50px 50px 0 0;
    border-width: 1px;
  }

  .b-class-line_text {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 16px;
    line-height: 30px;
    font-family: 'Noto Sans JP';
  }

  .b-class-button__starter {
    font-size: 16px;
    padding: 15px;
    justify-content: space-around;
    width: 125px;
    height: 15px;
    text-align: center;
    border-radius: 15px;
    border-width: 2px;
    border-color: red;
    background: red;

    &:hover {
      border-color: #343434;
      background: blue;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: bottom;
`

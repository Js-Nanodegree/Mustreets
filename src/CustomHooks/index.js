import { useState, useEffect } from 'react'
import axios from 'axios'
import { equals } from 'ramda'

const FetchApi = props => {
  const { url, method, headers, data } = props
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  })

  const effect = async () => {
    const response = await axios({
      url,
      method,
      headers,
      data,
    }).data

    if ((equals, response.messages)) {
      return setState({
        error: null,
        loading: null,
        data: response.data,
      })
    }
    return setState({
      error: response.messages,
      loading: null,
      data: null,
    })
  }

  useEffect(() => {
    effect()
  })

  return [state]
}

export default FetchApi

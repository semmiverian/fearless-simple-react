import axios from 'axios'

export function addIncrement(counter) {
  return {
    type: 'INCREMENT_COUNTER',
    counter
  }
}

export function addDecrement(counter) {
  return {
    type: 'DECREMENT_COUNTER',
    counter
  }
}

export function saveSwapiData(payload) {
  return {
    type: 'SAVE_SWAPI_DATA',
    payload
  }
}

export function hitSwapiAPi() {
  return dispatch => {
    console.log('aku dipanggil')
    // dispatch loading hit api
    dispatch({
      type: 'SWAPI_LOADING_API',
      payload: true
    })
    axios.get('https://swapi.co/api/people/1/')
          .then(({ data }) => {
              // dispatch(saveSwapiData(data))
              // dispatch masukin data
              // dispatch loading nya kita false
              dispatch({
                type: 'SAVE_SWAPI_DATA',
                payload: data
              })
              dispatch({
                type: 'SWAPI_LOADING_API',
                payload: false
              })
          })
          .catch(err => {
            console.log(err)
            // dispatch error hit api
            dispatch({
              type: 'ERROR_SWAPI_DATA',
              payload: err
            })
            // dispath loading nya dibuat menjadi false
            dispatch({
              type: 'SWAPI_LOADING_API',
              payload: false
            })
          })
  }
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + action.counter
      } 
    case 'DECREMENT_COUNTER': 
      return {
        ...state,
        counter: state.counter - action.counter
      }
    case 'SAVE_SWAPI_DATA': 
      return {
        ...state,
        swapi: {
          ...state.swapi,
          data: action.payload
        }
      }
    case 'SWAPI_LOADING_API': {
      return {
        ...state,
        swapi: {
          ...state.swapi,
          loading: action.payload
        }
      }
    }
    case 'ERROR_SWAPI_DATA': {
      return {
        ...state,
        swapi: {
          ...state.swapi,
          error: action.payload
        }
      }
    }
    default:
      return {
        name: 'Jays No Limit',
        counter: 1,
        swapi: {
          data: {},
          loading: false,
          error: {}
        }
      }
  }
}
const redux = require('redux')

let initialState = {
  counter: 0
}

let rootReducer = (state = initialState,action) => {
  if (action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    }
  } else if (action.type == "DEC_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1
    }
  } else if (action.type == "SUB_COUNTER") {
    return {
      ...state,
      counter: state.counter - action.value
    }
  }
  return state
}

//create a store
const store = redux.createStore(rootReducer)

console.log(store.getState())

store.subscribe(() => {
  console.log("State subscription received... it's a pretty good read")
})

store.dispatch({
  type: "DEC_COUNTER"
})

store.dispatch({
  type: "DEC_COUNTER"
})

store.dispatch({
  type: "INC_COUNTER"
})
store.dispatch({
  type: "INC_COUNTER"
})
store.dispatch({
  type: "INC_COUNTER"
})

store.dispatch({
  type: "SUB_COUNTER",
  value: -3
})

console.log(store.getState())

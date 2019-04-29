const redux = require('redux')

//requiring readline to get input from user in console.
const readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//asking question with readline to get input to subtract from counter
rl.question("What number do you want to subtract", function(answer) {
  //definining initial state to pass to reducer
  const initialState = {
    counter: 0
  }

  //Creating reducers
  let rootReducer = (state = initialState, action) => {
    if (action.type == "INCREMENT_COUNTER") {
      return {
        ...state,
        counter: state.counter + 1
      }
    } else if (action.type == "DECREMENT_COUNTER") {
      return {
        ...state,
        counter: state.counter - 1
      }
    } else if (action.type == "SUBTRACT_COUNTER") {
      return {
        ...state,
        counter: state.counter - action.value
      }
    }
    return state
  }

  //Creating global store
  const store = redux.createStore(rootReducer)

  //Adding a subscription to listen for change of store
  //Subscription needs to be declared prior to dispatch to log in console.
  store.subscribe(() => {
    console.log("STATE CHANGED")
  })

  //dispatching increment action
  store.dispatch({
    type: 'INCREMENT_COUNTER'
  })
  store.dispatch({
    type: 'INCREMENT_COUNTER'
  })
  store.dispatch({
    type: 'INCREMENT_COUNTER'
  })
  store.dispatch({
    type: 'INCREMENT_COUNTER'
  })
  store.dispatch({
    type: 'INCREMENT_COUNTER'
  })

  console.log(store.getState())

  //dispatching decrement action
  store.dispatch({
    type: 'DECREMENT_COUNTER'
  })

  console.log(store.getState())

  //dispatching subraction action
  store.dispatch({
    type: 'SUBTRACT_COUNTER',
    value: answer
  })
  console.log(store.getState())
  rl.close()
})

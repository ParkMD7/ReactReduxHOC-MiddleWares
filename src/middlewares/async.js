// NOTE: this file will house custom middleware to build an async action creator -> action creator that return a promise on its payload property

// NOTE: for the first function will be called with the dispatch property
// export default function({ dispatch }){
  // this function will be called with the 'next' function -> sends it to the next middleware on the stack
  // return function(next){
    // this function will be called with our returned action obj
    // return function(action){
//
//     }
//   }
// }


// Refactored above -> 100% the exact same
export default ({ dispatch }) => (next) => (action) => {
  // Here is where our middleware logic gets executed. For the purposes of this custom middleware we are checking to see if the action contains a Promise on its payload property
  // If it does, we then want to wait for it to resolve and if it doesn't then we send it on to the next middleware on our stack
  if(!action.payload || !action.payload.then){
    return next(action)
  }

  // if we get to this part of the code then it means our action obj has a Promise
  action.payload.then((response) => {
    const newActionObj = { ...action, payload: response }
    dispatch(newActionObj) // takes the newly created newActionObj and sends it back through all of our middleware - but this time with no Promise tied to it
  })
}

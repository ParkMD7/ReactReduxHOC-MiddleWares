// NOTE: this file will house custom middleware to build a validator for our state data types
// NOTE: We want to run this middleware ONLY after all of our reducers have run and updated state
// NOTE: Once that has happened, this middleware will get the newly updated state and validate the structure and type of values in state

// dependencies
import tv4 from 'tv4'; // Tiny Validator npm package to help validate data

// user files
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if(!tv4.validate(getState(), stateSchema)){
    console.warn('Invalid State Schema Detected')
  }
}

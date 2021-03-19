import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR'

export const ADD_SMURF = 'ADD_SMURF'
export const SET_ERROR = 'SET_ERROR'


export const fetchSmurfData = () => { //Redux thunction to use synchronious call to fetch smurf data
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS_START})
        axios
        .get(`http://localhost:3333/smurfs/`)
        .then((res) => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SMURFS_ERROR, payload: err.message })
        })
    }
}
// Add new smurf action on form submit, payload is state from addform values
export const addNewSmurf = newSmurf => {
    return {type: ADD_SMURF, payload: newSmurf}
}

// Error action if form is not complete 
export const setError = error => {
    return {type: SET_ERROR, payload: error}
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
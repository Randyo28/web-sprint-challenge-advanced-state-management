import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Smurf from './Smurf';
import { fetchSmurfData } from '../actions/'

 const SmurfList = ()=> {

    const {smurfs, isLoading } = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSmurfData())
    },[dispatch])
    

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <div className="listContainer">
        {smurfs.map(smurf => {
            return (
                <Smurf smurf={smurf}/>
            )
        })}
    </div>);
}

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
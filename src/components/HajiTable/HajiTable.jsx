import React,{useEffect, useReact} from 'react'
import {useDispatch, useSelector} from 'react-redux'

function HajiTable() {

    const dispatch = useDispatch()
    const hajiTable = useSelector(store => store.haji)
    useEffect( () => {
        dispatch({
            type: 'FETCH_HAJI'
        });
    }, [])
    return (
        <p>Under Construction Progress Page</p>
    )
}

export default HajiTable
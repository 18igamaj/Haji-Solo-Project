import React,{useEffect, useReact} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HajiTableItem from '../HajiTableItem/HajiTableItem'

function HajiTable() {

    const dispatch = useDispatch()
    const hajiTable = useSelector(store => store.haji)
    useEffect( () => {
        dispatch({
            type: 'FETCH_HAJI'
        });
    }, [])
    return (
        <div>
            {hajiTable && hajiTable.map((item,) => (
                 <HajiTableItem key={item.id} item={item} />
            ))}
     
    </div>)
}

export default HajiTable
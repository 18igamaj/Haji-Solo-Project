import React,{useEffect, useReact} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HajiTableItem from '../HajiTableItem/HajiTableItem'

function HajiTable() {

    const dispatch = useDispatch()
    const hajiTable = useSelector(store => store.hajj)
    useEffect( () => {
        dispatch({
            type: 'FETCH_HAJI'
        });
    }, [])


    return (
        <table>
            <thead>
                <tr>
                    <th>Budget Name</th> 
                    <th>Budget Goal</th> 
                    <th>Amount Saved</th> 
                    {/* <th>Category</th> */}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody >
            { hajiTable && hajiTable.map((item, i) => (
            <tr>   <HajiTableItem key={i} item={item} /> </tr>
            ))}
              </tbody>
 </table>
    )
}

export default HajiTable
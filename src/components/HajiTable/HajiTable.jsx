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
                    <th>Budget Goal</th> <br></br>
                    <th>Amount Saved</th> <br></br>
                    {/* <th>Category</th> */}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            
            { hajiTable && hajiTable.map((item, i) => (
               <HajiTableItem key={i} item={item} />
            ))}
 </table>
    )
}

export default HajiTable
import { useDispatch } from "react-redux"
import {useState} from 'react'

function HajiTableItem({item}){

    console.log('WHATTTTTT IS THIS', item)

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false)
    let [saved, setSaved] = useState('');
    // let [total, setTotal] = useState(saved)item.amount_saved

    const handleAddSave = (event) => {
        event.preventDefault();

        // setTotal(item.amount_saved + saved)
        dispatch({
            type: 'ADD_SAVE',
            payload: {saved:saved, id:item.id }
        })

        setEdit(false);
        setSaved('')

    }

    const handleDelete = (id) => {

        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }

    return (
        
            // <tbody >
              <>
                    <td>{item.name}</td>
                    <td>{item.category_budget}</td>
                    {!edit ? (
                         <td onClick={() => setEdit(true)}>{item.amount_saved}</td>
                    ):(
                        <td> <form>
                        <label>Amount Saved</label>
                        <input 
                        type='number'
                        placeholder='Amount'
                        value={saved}
                        onChange={(e) => setSaved(e.target.value)} />
                        <button onClick={ handleAddSave}>Add</button>
                        </form>
                        </td>
                    )} 
                   
                     <button>🖊️</button>
                     <button onClick={() => handleDelete(item.id)}>❌</button>
               
               
          </>
       
    
    )
}

export default HajiTableItem
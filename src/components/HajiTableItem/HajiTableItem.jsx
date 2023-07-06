import { useDispatch } from "react-redux"
import {useState} from 'react'
import {formatter} from '../HelperFunctions'

function HajiTableItem({item, StyledTableCell}){

    console.log('WHATTTTTT IS THIS', item)

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false)
    let [saved, setSaved] = useState('');
    // let [total, setTotal] = useState(saved)item.amount_saved

    const handleAddSave = (event) => {
        event.preventDefault();

        // setTotal(item.amount_saved + saved) formatter
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
                    <StyledTableCell>{item.name}</StyledTableCell>
                    <StyledTableCell>{formatter.format(item.category_budget)}</StyledTableCell>
                    {!edit ? (
                         <StyledTableCell onClick={() => setEdit(true)}>{formatter.format(item.amount_saved)}</StyledTableCell>
                    ):(
                        <StyledTableCell> <form>
                        <label>Amount Saved</label>
                        <input 
                        type='number'
                        placeholder='Amount'
                        value={saved}
                        onChange={(e) => setSaved(e.target.value)} />
                        <button onClick={ handleAddSave}>Add</button>
                        </form>
                        </StyledTableCell>
                    )} 
                   
                  
                     <button onClick={() => handleDelete(item.id)}>❌</button>
               
               
          </>
       
    
    )
}

export default HajiTableItem
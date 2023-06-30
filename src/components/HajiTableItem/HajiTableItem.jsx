import { useDispatch } from "react-redux"


function HajiTableItem({item}){

    console.log('WHATTTTTT IS THIS', item)

    const dispatch = useDispatch();

    const handleDelete = (item) => {

        dispatch({
            type: 'DELETE_ITEM',
            payload: item.id
        })
    }

    return (
        
            <tbody >
                <tr >
                    <td>{item.name}</td>
                    <td>{item.category_budget}</td>
                    <td>{item.amount_saved}</td>
                     <button>🖊️</button>
                     <button onClick={() => handleDelete(item)}>❌</button>
                </tr>
               
            </tbody>
       
    
    )
}

export default HajiTableItem
import { useDispatch } from "react-redux"


function HajiTableItem({item}){

    console.log('WHATTTTTT IS THIS', item)

    const dispatch = useDispatch();

    return (
        
            <tbody >
                <tr >
                    <td>{item.name}</td>
                    <td>{item.category_budget}</td>
                    <td>{item.amount_saved}</td>
                     <button>🖊️</button>
                     <button onClick={handleDelete}>❌</button>
                </tr>
               
            </tbody>
       
    
    )
}

export default HajiTableItem
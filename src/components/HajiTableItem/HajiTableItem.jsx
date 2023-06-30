
function HajiTableItem({item}){

    console.log('WHATTTTTT IS THIS', item)

    return (
        
            <tbody >
                <tr >
                    <td>{item.name}</td>
                    <td>{item.category_budget}</td>
                    <td>{item.amount_saved}</td>
                     <button>🖊️</button>
                     <button>❌</button>
                </tr>
               
            </tbody>
       
    
    )
}

export default HajiTableItem
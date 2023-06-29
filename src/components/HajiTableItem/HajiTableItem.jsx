
function HajiTableItem({item}){

    console.log('WHATTTTTT IS THIS', item)

    return (
        <table>
            <thead>
                <tr>
                    <th>Budget Name</th>
                    <th>Budget Goal</th>
                    <th>Amount Saved</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody >
                <tr >
                    <td>{item.name}</td>
                    <td>{item.category_budget}</td>
                    <td>{item.amount_saved}</td>
                </tr>
            </tbody>
        </table>
    
    )
}

export default HajiTableItem
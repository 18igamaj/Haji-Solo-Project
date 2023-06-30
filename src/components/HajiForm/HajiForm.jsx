import {useState} from 'react'
import {useDispatch} from 'react-redux'

function HajiForm(){

    let [name, setName] = useState('')
    let [budgetAmount, setBudget] = useState(0)
    let [saved, setSaved] = useState(0)

    const handleAddSave = (event) => {
        event.preventDefault();
        dispatchEvent({
            type: 'ADD_SAVE',
            payload: saved
        })

        setSaved()

    }
    const handleCreateBudget = (event) => {
        event.preventDefault();
        dispatchEvent({
            type: 'ADD_BUDGET',
            payload: {name,category_budget:budgetAmount}
        })

        setSaved()

    }

    return (
        <>
        <form>
            <label>Budget Name</label>
            <input 
            type="text"
            placeholder='Budget-Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <label>Budget</label>
            <input 
            type="number"
            placeholder='Goal'
            value={budgetAmount}
            onChange={(e) => setBudget(e.target.value)} />
            <button onClick={(event) =>handleCreateBudget}>Create</button>
        </form>

        <form>
        <label>Amount Saved</label>
        <input 
        type='number'
        placeholder='Amount'
        value={saved}
        onChange={(e) => setSaved(e.target.value)} />
        <button onClick={(event) => handleAddSave}>Add</button>
        </form>
        </>
    )
}

export default HajiForm
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

function HajiForm(){

    const dispatch = useDispatch()
    const hajiTable = useSelector(store => store.hajj)


    let [name, setName] = useState('')
    let [budgetAmount, setBudget] = useState(0)
    let [saved, setSaved] = useState(0)

    const handleAddSave = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_SAVE',
            payload: {saved:saved, id: hajiTable[0].id }
        })

        setSaved()

    }
    const handleCreateBudget = (event) => {
        event.preventDefault();
        console.log('We are in handle Create')
        dispatch({
            type: 'ADD_BUDGET',
            payload: {name,category_budget:budgetAmount}
        })

       
        setBudget('')
        setName('')
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
            <button onClick={handleCreateBudget}>Create</button>
        </form>

        <form>
        <label>Amount Saved</label>
        <input 
        type='number'
        placeholder='Amount'
        value={saved}
        onChange={(e) => setSaved(e.target.value)} />
        <button onClick={ handleAddSave}>Add</button>
        </form>
        </>
    )
}

export default HajiForm
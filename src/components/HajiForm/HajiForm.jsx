import {useState} from 'react'
import {useDispatch} from 'react-redux'

function HajiForm(){

    let [name, setName] = useState('')
    let [budgetAmount, setBudget] = useState(0)
    let [saved, setSaved] = useState(0)

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
        </form>

        <form>
        <label>Amount Saved</label>
        <input 
        type='number'
        placeholder='Amount'
        value={saved}
        onChange={(e) => setSaved(e.target.value)} />
        <button>Add</button>
        </form>
        </>
    )
}

export default HajiForm
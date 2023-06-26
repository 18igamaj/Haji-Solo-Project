import axios from 'axios'
import {put, takeLatest} from 'redux-saga/effects'
// imports from axios for Fetch use and redux-saga effects to dispatch actions

// Saga Fetch will allow us to use our GET throughout files
function* fetchHajj(){
    try{
        const hajjTable = yield axios.get('api/haji')
        console.log('This is the information coming from server GET', hajjTable.data)
        yield put({
            type: 'SET_HAJI_TABLE',
            payload: hajjTable.data
        })
    } catch(err){
        console.log('Error with GET request ClientSide', err)
    }
}

function* hajiFetch() {
    yield takeLatest('FETCH_HAJI', fetchHajj) 
}

export default hajiFetch
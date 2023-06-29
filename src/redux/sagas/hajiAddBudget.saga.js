import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* addBudget(action){
 

    try{
           console.log('POST action.payload ===>',action.payload)
        yield axios.post('/api/haji', action.payload)
        yield put({
            type: 'FETCH_HAJI'
        })
    }catch(err){
        console.log('There is an error with Client POST', err)
    }
}

function* addBudgetSaga() {
    yield takeLatest('ADD_BUDGET', addBudget)
}

export default addBudgetSaga
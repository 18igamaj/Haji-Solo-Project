import axios from 'axios'
import {put, takeLatest} from 'redux-saga/effects';


function* addSaving(action){
    try{
        console.log('POST SAVING action.payload ===>', action.payload)
        yield axios.post('/api/haji', action.payload)
        yield put({
            type: 'FETCH_HAJI'
        })
    } catch(err){
        console.log('ERROR with CLIENT SAVING SAGA')
    }
}

function* addSavingSaga(){
    yield takeLatest('ADD_SAVE', addSaving)
}

export default addSavingSaga
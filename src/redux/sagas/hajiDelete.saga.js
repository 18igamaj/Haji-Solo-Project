import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* deleteTableItem(action){
    try{

        yield axios.delete(`/api/haji/${action.payload}`)
        yield put({
            type: 'FETCH_HAJI'
        });
    } catch(err) {
        console.log('DELETE ERROR ===>', err)
    }
}

function* deleteSaga(){
    yield takeLatest('DELETE_ITEM', deleteTableItem)
}

export default deleteSaga
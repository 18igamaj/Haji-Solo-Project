import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* deleteTableItem(action){
    try{

        yield axios.delete(`/api/haji/${action.payload.id}`)
        yield put({
            type: 'FETCH_HAJI'
        });
    } catch(err) {
        console.log('DELETE ERROR ===>', err)
    }
}
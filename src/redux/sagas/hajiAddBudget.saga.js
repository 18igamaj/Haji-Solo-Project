
function* AddBudget(action){
 

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


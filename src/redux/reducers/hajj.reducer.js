
// will store result from FetchSaga
// this will allow us to pull information to be manipulated for DOM use
const hajjReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HAJI_TABLE':
            return action.payload;
        default:
            return state;
    }
}

export default hajjReducer;
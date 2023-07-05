import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Typography } from '@mui/material';


function Progress() {
    const dispatch = useDispatch()
  const haji = useSelector(store => store.hajj)
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_HAJI'
        });
    }, [])

    let totalCategory = 0
    let totalSaved = 0
    for( let item of haji){
        totalCategory += item.category_budget
        totalSaved += item.amount_saved
    }

  const formatPercentage = (amt) => {
        return amt.toLocaleString(undefined, {
            style: 'percent',
            minimumFractionDigits: 0,
        })
    }

    console.log(totalCategory, totalSaved)
  

    // console.log(haji.category_budget);
    return (
    

        <div>


        <progress max={totalCategory} value={totalSaved}/>
        <Typography >
            {formatPercentage(totalSaved / totalCategory )}
       </Typography>

             
        saved ... {totalSaved}      Goal... {totalCategory}
     
   </div> )
}

export default Progress
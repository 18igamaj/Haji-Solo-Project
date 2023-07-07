import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Typography } from '@mui/material';
import {formatter, formatPercentage} from '../HelperFunctions'

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

  

    console.log(totalCategory, totalSaved)
  

    // console.log(haji.category_budget);
    return (
    

        <div className='progress'>

            Progress <br></br>
        <progress className='progress-bar' max={totalCategory} value={totalSaved}/>

        <Typography >
        Saving: {formatter.format(totalSaved)}  Goal: {formatter.format(totalCategory)}
            <br></br>
            {formatPercentage(totalSaved / totalCategory )} GOAL REACHED
       </Typography>

             
      
     
   </div> )
}

export default Progress
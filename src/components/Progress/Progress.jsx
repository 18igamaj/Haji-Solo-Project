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

        <Typography className='progress-text' >
        <b> Saving:</b>  {formatter.format(totalSaved)} 
        <br></br>
        <b> Goal: </b>{formatter.format(totalCategory)}
            <br></br>
           <b> {formatPercentage(totalSaved / totalCategory )} OF GOAL REACHED</b>
       </Typography>

             
      
     
   </div> )
}

export default Progress
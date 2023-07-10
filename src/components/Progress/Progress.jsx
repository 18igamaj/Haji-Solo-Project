import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Typography } from '@mui/material';
import {formatter, formatPercentage} from '../HelperFunctions'
import { useHistory } from 'react-router-dom'
import {Button} from '@mui/material'

function Progress() {
  const dispatch = useDispatch();
  const haji = useSelector((store) => store.hajj);
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "FETCH_HAJI",
    });
  }, []);

  const goBudget = () => {
    history.push("/budget");
  };

  let totalCategory = 0;
  let totalSaved = 0;
  for (let item of haji) {
    totalCategory += item.category_budget;
    totalSaved += item.amount_saved;
  }

  console.log(totalCategory, totalSaved);

  // console.log(haji.category_budget);
  return (
    <div className="progress">
      <b style={{ display: "flex", justifyContent: "center" }}>
        Progress <br></br>
      </b>
      <progress
        className="progress-bar"
        max={totalCategory}
        value={totalSaved}
      />

      <Typography className="progress-text">
        <b> Saving:</b> {formatter.format(totalSaved)}
        <br></br>
        <b> Goal: </b>
        {formatter.format(totalCategory)}
        <br></br>
        <b> {formatPercentage(totalSaved / totalCategory)} OF GOAL REACHED</b>
      </Typography>
      <br></br>
      <Button
        sx={{
          color: "white",
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "#008183",
          },
        }}
        onClick={goBudget}
      >
        Budget
      </Button>
    </div>
  );
}

export default Progress;
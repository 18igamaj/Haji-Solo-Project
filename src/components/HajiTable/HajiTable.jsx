import React,{useEffect, useReact} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HajiTableItem from '../HajiTableItem/HajiTableItem'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router-dom'
import {Button} from '@mui/material'

function HajiTable() {
  const dispatch = useDispatch();
  const hajiTable = useSelector((store) => store.hajj);
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "FETCH_HAJI",
    });
  }, []);

  const goInfo = () => {
    history.push("/info");
  };

  const goProgress = () => {
    history.push("/progress");
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Budget Name</StyledTableCell>
            <StyledTableCell align="center">Budget Goal</StyledTableCell>
            <StyledTableCell align="center">Amount Saved</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hajiTable &&
            hajiTable.map((item, i) => (
              <StyledTableRow>
                {" "}
                <HajiTableItem
                  key={i}
                  item={item}
                  StyledTableCell={StyledTableCell}
                />{" "}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <Button
          sx={{
            color: "white",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "#008183",
            },
          }}
          onClick={goInfo}
        >
          {" "}
          Info
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Button
          sx={{
            color: "white",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "#008183",
            },
          }}
          onClick={goProgress}
        >
          {" "}
          Progress
        </Button>
      </div>
    </>
  );
}

export default HajiTable;
import React,{useEffect, useReact} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HajiTableItem from '../HajiTableItem/HajiTableItem'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function HajiTable() {

    const dispatch = useDispatch()
    const hajiTable = useSelector(store => store.hajj)
    useEffect( () => {
        dispatch({
            type: 'FETCH_HAJI'
        });
    }, [])

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
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell align='center' >Budget Name</StyledTableCell> 
                    <StyledTableCell align='center' >Budget Goal</StyledTableCell> 
                    <StyledTableCell align='center' >Amount Saved</StyledTableCell> 
                    <StyledTableCell align='center' >Delete</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody >
            { hajiTable && hajiTable.map((item, i) => (
            <StyledTableRow>   <HajiTableItem key={i} item={item} StyledTableCell={StyledTableCell} /> </StyledTableRow>
            ))}
              </TableBody>
 </Table>
    )
}

export default HajiTable
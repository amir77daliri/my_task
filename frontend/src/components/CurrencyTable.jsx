import {useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Divider, Typography} from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledCustomTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#b2e4ae",
    color: theme.palette.primary.main,
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



function createData(name, price,max,change) {
  return { name, price, max, change };
}

const rows = [
  createData('دلار آمریکا', '49.500', '50,000', '2.3%+'),
  createData('یورو', '55,940', '60,200', '1.3%-'),
  createData('درهم امارات', '137,600', '138,200', '1.3%-'),
  createData('پوند', '60,130', '62,876', '0.3%+')
];

const CurrencyTable = ({currencies, setCurrencies}) => {
  let socket;

  useEffect(() => {
    socket = new WebSocket('ws://localhost:8000/ws/currency/')
    socket.onopen = function (e) {
      console.log("websocket connected successfully")
    }
    socket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            setCurrencies(data)
        };
    socket.onclose = function(e) {
            console.log('Chat socket closed unexpectedly');
        };

  }, [])

  return (
    <Box sx={{textAlign: "center"}}>

      <Typography>
        نمایش لحظه ای قیمت ارزها
      </Typography>
      <Divider color="red" sx={{ mb: 2, mt: 1}}/>

      {/* First Table  --> Can be placed in a separate component */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledCustomTableCell colSpan={5}>ارزهای دیجیتال</StyledCustomTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell> ------- </StyledTableCell>
            <StyledTableCell align="left">نام ارز</StyledTableCell>
            <StyledTableCell align="left">قیمت </StyledTableCell>
            <StyledTableCell align="left">قیمت ریالی </StyledTableCell>
            <StyledTableCell align="left">روزانه</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.length > 0 ? (currencies.map((currency) => (
            <StyledTableRow key={currency.name}>
              <StyledTableCell align="left"> <MonetizationOnIcon /> </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {currency.name}
              </StyledTableCell>
              <StyledTableCell align="left" sx={{color: 'green'}} >{`${currency.price} $` }</StyledTableCell>
              <StyledTableCell align="left" sx={{color: 'red'}} >{`${currency.price * 48} ریا ل ` }</StyledTableCell>
              <StyledTableCell align="left">{`${currency.content} ` }</StyledTableCell>
            </StyledTableRow>
          ))) : (
            <StyledTableRow >
              <StyledTableCell align="left"><MonetizationOnIcon /></StyledTableCell>
              <StyledTableCell align="left">------</StyledTableCell>
              <StyledTableCell align="left">------</StyledTableCell>
              <StyledTableCell align="left">------</StyledTableCell>
              <StyledTableCell align="left">------</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>

    <Divider variant="middle" sx={{mt:3, mb: 2}} color="grey"/>

    {/* Second Table -*/}

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledCustomTableCell colSpan={5}>ارزهای اصلی</StyledCustomTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="left">نام ارز</StyledTableCell>
            <StyledTableCell align="left">قیمت </StyledTableCell>
            <StyledTableCell align="left">بیشترین قیمت</StyledTableCell>
            <StyledTableCell align="left"> روزانه</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">{row.max}</StyledTableCell>
              <StyledTableCell align="left" sx={{color: row.change.includes("+") ? "green" : "red"}}>{row.change}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default CurrencyTable;
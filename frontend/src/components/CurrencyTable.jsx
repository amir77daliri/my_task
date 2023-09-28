import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Divider, Typography} from "@mui/material";

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



function createData(name, price,rial,daily) {
  return { name, price, rial, daily };
}

const rows = [
  createData('بیت کوین', '26,876,34$', '1,342,916,846', '2.3%+'),
  createData('اتریوم', '6,876,34$', '42,916,846', '1.3%-'),
  createData('تتر', '876,34$', '2,576,846', '1.3%-'),
  createData('بی ان بی', '76,34$', '916,846', '0.3%+')
];

const CurrencyTable = () => {
  return (
    <Box sx={{textAlign: "center"}}>
      <Typography>
        نمایش لحظه ای ارزها
      </Typography>
      <Divider color="red" sx={{ mb: 2, mt: 1}}/>

      {/* First Table  --> Can be placed in a separate component */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledCustomTableCell colSpan={5}>ارزها</StyledCustomTableCell>
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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">لوگو</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">{row.rial}</StyledTableCell>
              <StyledTableCell align="left">{row.daily}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

        {/* Second Table -*/}

    </TableContainer>

      <Divider variant="middle" sx={{mt:3, mb: 2}} color="grey"/>

      {/* Second Table -*/}

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
            <StyledTableCell align="left">قیمت ریالی ;</StyledTableCell>
            <StyledTableCell align="left"> روزانه</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">لوگو</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">{row.rial}</StyledTableCell>
              <StyledTableCell align="left">{row.daily}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

        {/* Second Table -*/}

    </TableContainer>
    </Box>
  );
}

export default CurrencyTable;
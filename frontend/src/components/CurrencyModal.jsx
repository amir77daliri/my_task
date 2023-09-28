import {useEffect, forwardRef} from 'react';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import { Modal } from '@mui/base/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateCurrencyForm from "./CreateCurrencyForm";
import {Typography} from "@mui/material";

const CurrencyModal = ({open, handleModalClose, handleModalOpen}) => {
  useEffect(() => {
      handleModalOpen()
  }, [])

  return (
      <div>
        <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleModalClose}
            slots={{ backdrop: StyledBackdrop }}
        >
            <Box sx={style}>
                <div style={{display: 'flex', justifyContent:'start', alignItems: 'center'}} >
                    <AddCircleOutlineIcon sx={{mr:2, color: 'green'}}/>
                    <Typography variant="subtitle1" color="red">
                        ساخت ارز جدید
                    </Typography>
                </div>
                <CreateCurrencyForm handleModalClose={handleModalClose}/>
            </Box>
        </StyledModal>
      </div>
  );
}

const Backdrop = forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
      <div
          className={clsx({ 'MuiBackdrop-open': open }, className)}
          ref={ref}
          {...other}
      />
  );
});

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(198 226 255 / 0.3);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});


export default CurrencyModal;
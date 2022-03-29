import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './header.styles.css'
import metamasks from '../../assets/images/metamasks.png'
import wallet from '../../assets/images/wallet-connect.svg'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: '#2d2842 !important',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
       e.preventDefault();
       setOpen(true);

    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button class="btn btn-wallet my-2 my-sm-0" type='submit' onClick={(e) => handleOpen(e)} >Connect Wallet</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{float: "right"}}>
                        <i className="pi pi-times RA-13-icon-cross" onClick={()=>handleClose()}></i>
                    </div>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p className="text-center">Connect to a wallet</p>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <button className="metabutton">   <img src={metamasks} alt="bscCryptex" width="10%" /> MetaMask</button>
                        </div>
                        <div className='mt-4'>
                            <button className="metabutton">   <img src={wallet} width="1)0%" alt="bscCryptex" />WalletConnect</button>
                        </div>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p className="text-center mt-5">New to Ethereum?</p>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p className="text-center1">Learn more about wallets</p>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
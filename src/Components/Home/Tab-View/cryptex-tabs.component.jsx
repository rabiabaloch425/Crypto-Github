
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import './cryptex-tabs.styles.css';
import Cards from "./Cards/cards.component"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import metamasks from '../../../assets/images/metamasks.png';
import wallet from '../../../assets/images/wallet-connect.svg'

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

const CryptexTabView = () => {
    const [activeIndex1, setActiveIndex1] = useState(1);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
       e.preventDefault();
       setOpen(true);

    }

    const handleClose = () => setOpen(false);



    return (
        <div className="tabview-demo bg-tranparent">
            <div className="card">

                <TabView activeIndex={activeIndex1} className='bg-tranparent'>
                    <TabPanel header="My last 10 created tokens " className='bg-tranparent'>
                        <div className="alight_center">
                            <button class="btn btn-wallet my-2 my-sm-0" type="submit" onClick={(e)=> handleOpen(e)}>Connect Wallet</button>
                        </div>

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

                    </TabPanel>
                    <TabPanel header="Last 10 created tokens" className='bg-tranparent'>
                        <Cards />
                    </TabPanel>

                </TabView>
            </div>


        </div>
    )
}
export default CryptexTabView;            
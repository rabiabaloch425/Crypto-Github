import React, { useState } from 'react';
import './contrac_form.styles.css';
import { Slider } from 'primereact/slider';

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

import questionSymbol from './../assets/images/question-symbol.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import metamasks from './../assets/images/metamasks.png'
import wallet from './../assets/images/wallet-connect.svg'

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
const ContractForm1 = (props) => {
    console.log("here is my props", props);
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
       e.preventDefault();
       setOpen(true);

    }
    const handleClose = () => setOpen(false);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const handleChange = (e) => {
        props.hitFunc();
    }

    const [value1, setValue1] = useState(null);

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    const connectWallet = (e) =>{
        e.preventDefault();
        setOpen(true);
    }

    return (



        <div className="row">
            <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12">
                <div className="card ">
                    <div className="card-header">
                        <section className="header_center d-flex "><svg onClick={() => handleChange()} stroke="currentColor" fill="currentColor" stroke-width="0" className="cursor-pointer" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg> <h1 className="h1_card mx-3">Contract settings</h1> </section>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                                <p className="p_grey">Token name
                                    <img src={questionSymbol} alt="questionSymbol" />

                                </p>
                                <InputText id="username" className="input_dime" />
                            </div>
                            <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                                <p className="p_grey">Token Symbol
                                    <img src={questionSymbol} alt="questionSymbol" />

                                </p>
                                <InputText id="username" className="input_dime" />
                            </div>
                            <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6 mt-5">

                                <p className="p_grey">Total Supply
                                    <img src={questionSymbol} alt="questionSymbol" />

                                </p>

                                <InputNumber inputId="integeronly" className="input_dime" />
                            </div>
                            <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6 mt-5">
                                <p className="p_grey">Decimals
                                    <img src={questionSymbol} alt="questionSymbol" />

                                </p>

                                <Slider value={value1} className="slider_crpyt" onChange={(e) => setValue1(e.value)} />
                                <p>{value1}</p>
                            </div>
                            <div class="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12 mt-5">
                                <p className="p_grey">Contract creation fees
                                </p>
                                <div>
                                    <div className="d-flex">
                                        <input type="radio" value="9" id="Pay in BNB" name="Contract" checked />
                                        <div className="d-grid">

                                            <p className="radio_p">
                                                Pay in BNB </p>
                                            <span className="span_p_red">Pay 0.19 BNB / $75.78 to create a contract.</span>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <div className="d-flex">
                                        <input type="radio" value="10" id="Pay in hashex" name="Contract" />
                                        <div className="d-grid">

                                            <p className="radio_p">
                                                Pay in BNB and get HashEx audit   <img src={questionSymbol} alt="questionSymbol" /> </p>
                                            <span className="span_p_red">Pay 1.99 BNB / $793.72 to create a contract and get audit.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 d-flex">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                    <p className="mx-3">I read and accept <a href="/#">Terms & Conditions</a></p>

                                </div>
                                <div class="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12 mt-5">
                                    <button class="btn btn-wallet1 my-2 my-sm-0" type="submit" onClick={(e)=>connectWallet(e)}>Connect Wallet</button>
                                </div>

                            </div>
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


                    </div>
                </div>
            </div>
        </div>




    )
}

export default ContractForm1;
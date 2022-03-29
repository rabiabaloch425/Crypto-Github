import React, { useState } from "react";

import './home-page.styles.css';
import bscCryptex from '../../assets/images/bscCryptex.jpeg';
import polygon from '../../assets/images/polygon.webp';
import matic from '../../assets/images/matic.webp';
import CryptexTabView from "./Tab-View/cryptex-tabs.component";

import ContractForm1 from "../../Layouts/contract_form1";
import ContractForm2 from "../../Layouts/contract_form2";
const HomePage = () => {

    const [form1, setForm1] = useState(false);
    const [form2, setForm2] = useState(false);
    const [container, setContainer] = useState(true);


    const handleForm1 = () => {
        setForm1(true);
        setForm2(false);
        setContainer(false);
    }
    const handleForm2 = () => {
        setForm2(true);
        setForm1(false);
        setContainer(false);
    }

    const childHitForm1 = () => {
        setForm1(false);
        setForm2(false);
        setContainer(true);
    }
    const childHitForm2 = () => {
        setForm2(false);
        setForm1(false);
        setContainer(true);
    }

    return (
        <>
            <div className="container  auto_margin">
                {
                    container == true ?
                        <>
                            <div className="row">
                                <div class="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12">
                                    <div className="card mt-5">
                                        <div className="card-header">
                                            <h2 className="card_left_title">Choose a chain</h2>
                                        </div>
                                        <div className="card-body">
                                            <p>Select a chain you want to create a contract in from chains we support now:</p>
                                            <div className="row mt-1">
                                                <div class="col-md-6 col-xl-3 col-sm-12 col-lg-6 col-xxl-3 bd_radio">
                                                    <div className="d-flex">
                                                        <input type="radio" value="1" id="BSC" name="fav_language" checked />
                                                        <div className="img_round">
                                                            <img src={bscCryptex} alt="bscCryptex" className="bsc-img1" />
                                                        </div>
                                                        <p className="radio_p">BSC </p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-xl-3 col-sm-12 col-lg-6 col-xxl-3 bd_radio">
                                                    <div className="d-flex">
                                                        <input type="radio" id="Testnet" name="fav_language" value="2" checked />
                                                        <div className="img_round">
                                                            <img src={bscCryptex} alt="bscCryptex" className="bsc-img1" />
                                                        </div>
                                                        <p className="radio_p">BSC Testnet</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-xl-3 col-sm-12 col-lg-6 col-xxl-3 bd_radio">
                                                    <div className="d-flex">
                                                        <input type="radio" id="Polygon" name="fav_language" value="3" checked />
                                                        <div className="img_round">
                                                            <img src={polygon} alt="bscCryptex" className="bsc-img1" />
                                                        </div>
                                                        <p className="radio_p">Polygon (Matic)</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-xl-3 col-sm-12 col-lg-6 col-xxl-3 bd_radio">
                                                    <div className="d-flex">
                                                        <input type="radio" id="Matic" name="fav_language" value="4" checked />
                                                        <div className="img_round">
                                                            <img src={matic} alt="bscCryptex" className="bsc-img1" />
                                                        </div>
                                                        <p className="radio_p">Matic Testnet</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-1 border-card">
                                                <div class="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12">
                                                    <p className="p_grey">Note:
                                                        <br />
                                                        <div class="coins_need">Need other chains? Send a message to our socials <a href="/#" target="_blank" rel="noopener" class="ContactSocialsstyled__StyledContactSocial-sc-5aqkfg-0 kTpvWO"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg></a><a href="/#" target="_blank" rel="noreferrer" class="ContactSocialsstyled__StyledContactSocial-sc-5aqkfg-0 kTpvWO">
                                                            <svg stroke="currentColor" className="m_10" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12">
                                    <div className="card ">
                                        <div className="card-header">
                                            <h2 className="card_left_title">Choose a contract type</h2>
                                        </div>
                                        <div className="card-body">
                                            <p>Select a contract type you want to create:</p>
                                            <div className="row">
                                                <div onClick={() => handleForm1()} class="col-md-6 col-xl-4 col-sm-12 col-lg-6 col-xxl-4 bd_radio">
                                                    <div className="d-flex">
                                                        <input type="radio" className="width_radio" value="5" />
                                                        <div className="d-grid">

                                                            <p className="radio_p">ERC20/BEP20 Token Contract </p>
                                                            <br />
                                                            <p className="p_grey">Smart contract compatible with ERC20 or BEP20 standarts (depends on network). Name, symbol, total supply and decimals are availible to set.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div onClick={() => handleForm2()} class="col-md-6 col-xl-4 col-sm-12 col-lg-6 col-xxl-4 bd_radio">
                                                    <div className="d-flex">
                                                        <input type="radio" className="width_radio" value="6" />

                                                        <div className="d-grid">
                                                            <p className="radio_p">
                                                                RFI Token Contract </p>
                                                            <br />
                                                            <p className="p_grey">Reflectable token. Optimized with best practices. Supports tax, burning, auto liquify and marketing fees on transfer. Read more about RFI token.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-xl-4 col-sm-12 col-lg-6 col-xxl-4 bd_radio_no-drop not_allowd ">
                                                    <div className="d-flex">
                                                        <input type="radio" className="width_radio" value="7" />

                                                        <div className="d-grid">
                                                            <p className="radio_p p_grey">
                                                                Baby Token</p>
                                                            <br />
                                                            <p className="p_grey" style={{color: "rgb(121 117 117)"}}>Do you want to create your own Baby Token? We are planning to add it to contract constructor, but you can order a custom development now. Please connect us via socials if you are interested in it.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-xl-4 col-sm-12 col-lg-6 col-xxl-4 bd_radio_no-drop not_allowd">
                                                    <div className="d-flex">
                                                        <input type="radio" className="width_radio" value="8" />

                                                        <div className="d-grid">
                                                            <p className="radio_p">
                                                                Staking Contract </p>
                                                            <br />
                                                            <p className="p_grey" style={{color: "rgb(121 117 117)"}}>Deploy your own time weighted staking (ex. CryptEx Staking) with your own parameters and get listed on our staking platform.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-1 border-card">
                                                <div class="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12">
                                                    <p className="p_grey">Note:
                                                        <br />
                                                        <div class="coins_need">Need other chains? Send a message to our socials <a href="/#" target="_blank" rel="noreferrer" class="ContactSocialsstyled__StyledContactSocial-sc-5aqkfg-0 kTpvWO"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg></a><a href="/#" target="_blank" rel="noreferrer" class="ContactSocialsstyled__StyledContactSocial-sc-5aqkfg-0 kTpvWO">
                                                            <svg stroke="currentColor" className="m_10" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        : " "
                }
                {
                    form1 == true ? <ContractForm1 hitFunc={ () => childHitForm1()} /> :
                        form2 == true ? <ContractForm2  hitFunc={ () => childHitForm2()} /> : " "
                }
                <div className="row">
                    <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12">
                        <div className="card ">
                            <div className="card-header">
                                <section className="header_center">  <h1 className="h1_card">Smart Contract constructor</h1></section>
                            </div>
                            <div className="card-body">
                                <p>Creating a token for a project is a complex process that requires in-depth coding knowledge and experience. Moreso, after preparing the code, a project should submit it for an audit to make sure there are no critical errors. CryptEx makes it easier.

                                </p>
                                <p className="mt-2">  CryptEx Token Constructor - a smart contract constructor that combines elements of audited, tested code with functional arguments.</p>
                                <p className="mt-2">
                                    Token Constructor is created to help project owners without coding knowledge with the creation of smart contracts. While normally, this process takes time and money, CryptEx is providing an affordable service that takes only a few minutes and is easy-to-use.
                                </p>
                                <p className="mt-2">  Solidity smart contract constructor helps create a BEP20/ERC20 or an RFI token with a built-in audit by HashEx and Paladin. Employing the expertise and reputation of professional coders and auditors, we deliver the most efficient token creation tool.</p>
                                <p className="mt-2">
                                    Depending on your preferences, you can use this ethereum smart contract constructor to build a token for your project, according to its needs.
                                </p>



                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div class="col-md-12">
                        <CryptexTabView />
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage;
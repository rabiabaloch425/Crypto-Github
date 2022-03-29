import React from "react";
import './header.styles.css';
import cryptex from '../../assets/images/cryptex-logo.png';
import bscCryptex from '../../assets/images/bscCryptex.jpeg';
import BasicModal from "./modal-crptex";


const Header = () => {
    return (
        <>

            <div className="container-fluid bg-header auto_margin">
                <div className="row auto_margin">
                    <div className="col-md-12 auto_margin">
                        <div className="container">
                            <nav class="navbar navbar-expand-lg mt-2 bg-transparent">
                                <a href="/"><img src={cryptex} alt="cryptex" className="cryptex-logo" />
                                </a>
                                <a class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    <i className="pi pi-bars" style={{fontSize: "25px"}}></i>
                                </a>

                                <div class="collapse navbar-collapse justify-center" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item ">
                                            <a class="nav-link" href="/#">Locks</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/#">Staking
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/#">Buy CRX
                                            </a>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="active" href="/#">Create a Token
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/#">NFT

                                            </a>
                                        </li>

                                    </ul>
                                    <form class="form-inline my-2 my-lg-0 d-flex">
                                        <button className="bsccrypt">

                                            <div className="d-flex">
                                                <img src={bscCryptex} alt="bscCryptex" className="bsc-img" />
                                                <svg stroke="currentColor" className="mt-px-5" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                            </div>
                                        </button>
                                        <BasicModal />



                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
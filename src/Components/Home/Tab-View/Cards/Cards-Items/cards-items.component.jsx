import React from 'react';
import './cards-items.styles.css';
import hash from "../../../../../assets/images/hash.svg"
// import { useNavigate } from 'react-router-dom';

const CardItems = ({ title, size, time, type, totalSupply, transaction, contract }) => {

    // const navigate = useNavigate();
    return (
        <div className={`${size} menu-item-card mt-2`} >

            <div className="card-token">
                <div className="card-header">
                    <div className="row">
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div>
                                <h1 className="title">{title.toUpperCase()}</h1>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div className='float-right'>
                                <img src={hash} width="110px" alt="hashex" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row mt-2">
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div>
                                <p className="detail-heading">Created at</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div className='float-right'>
                                <p className='detail-p'>{time}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div>
                                <p className="detail-heading">Type</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div className='float-right'>
                                <p className='detail-p'>{type}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div>
                                <p className="detail-heading">Total supply</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div className='float-right'>
                                <p className='detail-p'>{totalSupply}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div>
                                <p className="detail-heading">Transaction</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div className='float-right'>
                                <p className='detail-p'>{transaction}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div>
                                <p className="detail-heading">Contract</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                            <div className='float-right'>
                                <p className='detail-p'>{contract}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                        <div class="col-md-12 col-xl-12 col-sm-12 col-lg-12 col-xxl-12">
                            <button class="btn btn-wallet my-2 my-sm-0 w-100" type="submit">Detailed Info</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardItems;

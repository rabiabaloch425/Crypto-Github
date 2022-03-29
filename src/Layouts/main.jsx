import React from "react";
import Footer from "../Components/Footer/footer.component";
import Header from "../Components/Header/header.component";
import HomePage from "../Components/Home/home-page.component";
import './main.styles.css';

const MainPage = () => {
    return (
        <>

            <div className="container-fluid auto_margin">
                <div className="row auto_margin">
                    <div className="col-md-12 auto_margin">
                        <Header />
                    </div>
                </div>
                <div className="row auto_margin">
                    <div className="col-md-12 auto_margin">
                        <HomePage />
                    </div>
                </div>

                <div className="row mt-5 auto_margin">
                    <div className="col-md-12 auto_margin ">
                        <Footer />
                    </div>
                </div>
            </div>



        </>
    )
}

export default MainPage;
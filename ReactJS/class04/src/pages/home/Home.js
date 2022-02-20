import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div>
            <div className="container">

                <div className="row">
                    <Header />
                </div>

                <div className="row">
                    <h2> Album example
                    </h2>
                    <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <Button text="Hello" style={{color:'red'}} />
                    <Button text="World" style={{color:'blue'}} />
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

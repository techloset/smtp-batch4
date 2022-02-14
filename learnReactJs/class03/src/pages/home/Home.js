import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SearchBar from '../../components/searchBar/SearchBar';
import Card from '../../components/card/Card';

export default function Home() {
    return <div>
        <Header />
        <h1>What can we help you find?</h1>
        <SearchBar />
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Card />
                </div>
                <div className='col-md-4'>
                    <Card />
                </div>
                <div className='col-md-4'>
                    <Card />
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
             
            
            </div>
        </div>

        <Footer />
    </div>;
}

import React, {useEffect, useState} from 'react';
import Header from "./components/headers/Header";
import Modal from "./components/Modal/Modal";
import Table from "./components/TableComponent/Table";
import Button from "./components/Button/Button";
import CoinCard from "./components/CoinCard/CoinCard";

const App = () => {


    return (

        <div>
        <Header />
            <Table/>
            {/*<Button title={'TEXT'} onChange={()=> {}}/>*/}
            <CoinCard/>
        </div>
    );
};

export default App;
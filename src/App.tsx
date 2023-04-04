import React, {useContext, useEffect, useState} from 'react';
import Header from "./components/headers/Header";
import Coins, {CoinsType} from "./components/TableComponent/Coins";

import {Route, Routes} from "react-router-dom";
import {Coin} from "./routes/Coin";

import {coinCapAPI} from "./api/coincap-api";
import {initState} from './context/context';
import CoinProvider from "./context/CoinContext";
import CoinItemProvider from "./context/CoinItemContext";
import ModalProvider from "./context/ModalContext";
import CoinsContainer from "./components/TableComponent/CoinsContainer";

export type test = {
    coinID: string | undefined, rate: number, exchange: number, valueChange: number
}
const App = () => {
    return (
        <ModalProvider>
            <CoinProvider>

                <CoinItemProvider>
                    <div>
                        <Header/>
                        <Routes>
                            <Route path={'/'} element={<CoinsContainer/>}/>
                            <Route path={'/coin/:coinID'} element={<Coin/>}/>
                        </Routes>
                    </div>
                </CoinItemProvider>
            </CoinProvider>
        </ModalProvider>


    );
};

export default App;
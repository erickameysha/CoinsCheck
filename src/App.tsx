import React, {useContext, useEffect, useState} from 'react';
import Header from "./components/headers/Header";
import Coins, {CoinsType, IdContext} from "./components/TableComponent/Coins";

import {Route, Routes} from "react-router-dom";
import {Coin} from "./routes/Coin";

import {coinCapAPI} from "./api/coincap-api";
import BillContext, {initState, newRate} from './context/context';
import test from '../src/components/Modal/Modal'

export type test = {
    coinID: string | undefined, rate: number, exchange: number, valueChange: number
}
const App = () => {
    const [coins, setCoins] = useState<CoinsType[]>([])
    const [bill, setBill] = useState<test[]>(initState.data)
    const [deleteDatas, setDeleteDate] = useState<string>(initState.deleteData)

    useEffect(() => {
        coinCapAPI.getCoins('40').then((res) => {
            setCoins(res.data.data)
        })
        let valueAsconst =localStorage.getItem('BillValue')
        if (valueAsconst){
            let newValue= JSON.parse(valueAsconst)
            setBill(newValue )
        }

    }, [])


    return (
        <BillContext.Provider

        value={{
            data: bill,
            deleteData:deleteDatas
        }}>
            <div>
                <Header />
                <Routes>
                    <Route path={'/'} element={<Coins coins={coins}/>}/>
                    <Route path={'/coin/:coinID'} element={<Coin/>}/>
                </Routes>

            </div>
        </BillContext.Provider>
    );
};

export default App;
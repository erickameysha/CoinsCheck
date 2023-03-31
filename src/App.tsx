import React, {useEffect, useState} from 'react';
import Header from "./components/headers/Header";
import Coins, {IdContext} from "./components/TableComponent/Coins";
import axios from "axios";
import {Route, RouterProvider, Routes} from "react-router-dom";
import {Coin} from "./routes/Coin";
import BarChart from "./components/LineComponent/FirstCandies";

const App = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {

        axios.get(`https://api.coincap.io/v2/assets?limit=20`).then((res) => {
            console.log(res)
            setCoins(res.data.data)
            console.log(coins)
        })
    }, [])

    console.log('app' + coins)
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={ <Coins coins={coins}/>}/>
                <Route path={'/coin/:coinID'} element={<Coin />}/>
            </Routes>
<BarChart/>
        </div>
    );
};

export default App;
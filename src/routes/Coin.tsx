import React, {useEffect, useState} from 'react';
import {IdContext} from "../components/TableComponent/Coins";
import axios from "axios";
import {useParams} from "react-router-dom";
import s from './Coin.module.scss'
import FirstCandies from "../components/LineComponent/FirstCandies";
import LineBar from "../components/LineComponent/LineBar";
type PropsType = {
    id: string
}


export const Coin = () => {


    const [coin, setCoin] = useState<any>({})

    const params = useParams()
    useEffect(() => {

        axios.get(`https://api.coincap.io/v2/assets/${params.coinID}`).then((res) => {
            console.log(res)
            setCoin(res.data.data)
            console.log(coin)
        })
    }, [])


    console.log(coin)
    return <div>
        <div className={s.coin_container}>
            <div className={s.content} >
                <div >
                    <div>{coin.name}({coin.symbol})</div>
                    <div>${parseFloat(coin.priceUsd)}</div>
                </div>
                <div >
                    {/*<div>{coin.changePercent24Hr.slice(0,4)}%</div>*/}
                    <div className="">{coin.rank}</div>
                </div>
            </div>

        </div>

    </div>
};

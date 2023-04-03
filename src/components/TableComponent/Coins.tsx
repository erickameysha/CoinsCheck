import React, {useEffect, useState} from 'react';
import s from './Coins.module.scss'
import axios from "axios";
import CoinItem from "./CoinItem/CoinItem";
import {Link, Route} from "react-router-dom";
import {Coin} from "../../routes/Coin";
import {coinCapAPI} from "../../api/coincap-api";


export type CoinsType = {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: null | string,
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
    explorer: string
}
type PropsType = {
    coins: CoinsType[]
}



let defaultState: string | undefined =''

export let IdContext = React.createContext(defaultState)

const Coins = (props: PropsType) => {




    return (
        <div className={s.container}>
            <>
                <div>
                    <div className={s.coin}>

                        <p className={s.coin_Name}>Coin</p>
                        <p>Price</p>
                        <p>24h</p>
                    </div>
                </div>
                {props.coins.map(el => {



                    return (


                            <Link className={s.href} to={`/coin/${el.id}`}key={el.id}>
                                <CoinItem key={el.id} coin={el}/>
                            </Link>

                    )
                })}</>
        </div>
    )
};

export default Coins;
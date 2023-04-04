import React, {useContext, useEffect, useState} from 'react';
import s from './Coins.module.scss'
import axios from "axios";
import CoinItem from "./CoinItem/CoinItem";
import {Link, Route} from "react-router-dom";
import {Coin} from "../../routes/Coin";
import {coinCapAPI} from "../../api/coincap-api";
import {CoinContext, CoinContextType} from "../../context/CoinContext";
import {CoinItemContext, CoinItemContextType} from "../../context/CoinItemContext";


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
type propsType = {
  coins:CoinsType[]
    getCoinItemHandler: (id:string)=> void

}

const Coins = (props: propsType) => {
    let {coins,getCoinItemHandler} = props


    const callBackHandler = (elID: string) => {
        getCoinItemHandler(elID)
    }

    const renderCoins = coins.map(el => {
        return (


            <Link onClick={()=>callBackHandler(el.id)} className={s.href} to={`/coin/${el.id}`} key={el.id}>
                <CoinItem key={el.id} coin={el}/>
            </Link>

        )
    })
    return (
        <div className={s.container}>
                <div>
                    <div className={s.coin}>

                        <p className={s.coin_Name}>Coin</p>
                        <p>Price</p>
                        <p>24h</p>
                    </div>
                </div>
                {
                    renderCoins
                }
        </div>
    )
};

export default Coins;
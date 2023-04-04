import React, {useContext, useEffect, useState} from 'react';
import s from './Coins.module.scss'
import axios from "axios";
import CoinItem from "./CoinItem/CoinItem";
import {Link, Route} from "react-router-dom";
import {Coin} from "../../routes/Coin";
import {coinCapAPI} from "../../api/coincap-api";
import {CoinContext, CoinContextType} from "../../context/CoinContext";
import {CoinItemContext, CoinItemContextType} from "../../context/CoinItemContext";
import Coins from "./Coins";


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


const CoinsContainer = () => {
    const {coin} = useContext(CoinContext) as CoinContextType
    let {getCoinItem} = useContext(CoinItemContext) as CoinItemContextType

    const getCoinItemHandler = (coinID: string) => {
        getCoinItem(coinID)
    }

    return (
        <Coins getCoinItemHandler={getCoinItemHandler} coins={coin}/>
    )
};

export default CoinsContainer;
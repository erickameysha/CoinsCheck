import React from 'react';
import s from '../Coins.module.scss'
type CoinsType = {
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
    coin: CoinsType
}

const CoinItem = (props: PropsType) => {
    return (
        <div className={s.coin_row}>
            <div className={s.coin_name}>

                <p>{props.coin.symbol.toUpperCase()}</p>
            </div>
            <p>${Number(props.coin.priceUsd).toLocaleString('eng')}</p>
            <p>{Number(props.coin.changePercent24Hr).toLocaleString('eng',)}%</p>
        </div>
    );
};

export default CoinItem;
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
            <p>{props.coin.rank}</p>
            <div className={s. coin_name}>
                <p>{props.coin.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coin.priceUsd.slice(0,5)}</p>
            <p>{props.coin.changePercent24Hr}%</p>
            <p className={s.hideMobile}>${props.coin.volumeUsd24Hr}</p>
            <p className={s.hideMobile}>${props.coin.marketCapUsd}</p>
        </div>
    );
};

export default CoinItem;
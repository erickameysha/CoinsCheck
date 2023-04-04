import React from 'react';
import s from "../Coin.module.scss";
import {CoinsType} from "../../components/TableComponent/Coins";

type PropsType= {
    coinItem:CoinsType
}
const CoinContent = (props: PropsType) => {
    const {coinItem} = props
    return (
        <div className={s.content}>
            <div>
                <div>
                    <div>{coinItem.name}({coinItem.symbol})</div>
                </div>
                <div>
                    <div>${Number(coinItem.priceUsd).toLocaleString('eng')}</div>
                    {Number(coinItem.changePercent24Hr) <= 0 ?
                        <div
                            style={{color: 'red'}}>{Number(coinItem.changePercent24Hr).toLocaleString('eng')}%</div>
                        : <div
                            style={{color: 'green'}}>{Number(coinItem.changePercent24Hr).toLocaleString('eng')}%</div>
                    }

                </div>
            </div>
        </div>

    );
};

export default CoinContent;
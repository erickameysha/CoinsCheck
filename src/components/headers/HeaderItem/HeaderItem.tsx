import React, {useEffect, useState} from 'react';
import s from "../Header.module.scss";
import {coinCapAPI} from "../../../api/coincap-api";
import {CoinsType} from "../../TableComponent/Coins";

type PropsType={
    coin: CoinsType
}
const HeaderItem = (props: any) => {

    return (
        <>

                { Number(props.coin.changePercent24Hr) <= 0 ?
                <div key={props.coin.id} className={s.header_priceItem}>
                    ${props.coin.symbol} <span className={s.header_pricelower}>{Number(props.coin.changePercent24Hr).toLocaleString('eng')}</span>
                </div>
                       :
                    <div key={props.coin.id} className={s.header_priceItem}>
                    ${props.coin.symbol} <span className={s.header_priceSubtitle}>{Number(props.coin.changePercent24Hr).toLocaleString('eng')}</span>
                </div>
                }


        </>
    );
};

export default HeaderItem;
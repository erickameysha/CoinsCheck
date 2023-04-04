import React, {createContext, FC, useEffect, useState} from 'react';
import {coinCapAPI} from "../api/coincap-api";
import {CoinsType} from "../components/TableComponent/Coins";


export type CoinContextType= {
    coin: CoinsType[]
}
type Props = {
    children: React.ReactNode
}
export const CoinContext = React.createContext<CoinContextType | null>(null);
const CoinProvider: React.FC<Props> = ({ children }) => {
    const [coin, setCoin] = React.useState<CoinsType[]>([]);

    useEffect(()=>{
        coinCapAPI.getCoins('40').then((res) => {
            setCoin(res.data.data)
        })

    },[])

    return <CoinContext.Provider value={{ coin }}>{children}</CoinContext.Provider>;
};
export default CoinProvider;






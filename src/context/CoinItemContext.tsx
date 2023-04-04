import React, {createContext, FC, useEffect, useState} from 'react';
import {coinCapAPI} from "../api/coincap-api";
import {CoinsType} from "../components/TableComponent/Coins";

export type CoinItemContextType = {
    coinItem: CoinsType
    getCoinItem: (id: string) => void
    fetchCandies:(id:string)=> void

}
type Props = {
    children: React.ReactNode

}
export const CoinItemContext = React.createContext<CoinItemContextType | null>(null);

const CoinItemProvider: React.FC<Props> = ({children}) => {
    const [coinItem, setCoinItem] = React.useState<any>({});
    const [candies, setCandies] = React.useState<CoinsType[]>([]);

    const getCoinItem = (id: string) => {
        coinCapAPI.coinFetching(id)
            .then((res) => {
                setCoinItem(res.data.data)
            })
    }
    const fetchCandies = (id:string) => {
        coinCapAPI.firstCandies(id)
            .then((res)=>{

            })
    }


    return <CoinItemContext.Provider value={{coinItem, getCoinItem,fetchCandies}}>{children}</CoinItemContext.Provider>;
};
export default CoinItemProvider;

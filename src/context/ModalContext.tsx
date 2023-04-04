import React, {useEffect, useState} from 'react';

import {CoinsType} from "../components/TableComponent/Coins";
import axios from "axios";
import {coinCapAPI} from "../api/coincap-api";

type BillType = {
    coinID: string,
    rate: number,
    exchange: number,
    valueChange: number
}
export type BillContextType = {
    bill: BillType[]
    item: CoinsType[]
    onClickSet: (coinID: string) => void
    value: number
    rate: number
    coinID: string
    addBalance: (id: string, rate: number, exchange: number, value: number) => void
    removeBill: (id: string) => void
    test: number

}
type Props = {
    children: React.ReactNode

}
export const ModalContext = React.createContext<BillContextType | null>(null);

const ModalProvider: React.FC<Props> = ({children}) => {
    const [bill, setBill] = React.useState<BillType[]>([]);
    let [coinID, setCoinID] = useState<string>('')
    let [value, setValue] = useState<number>(1)
    let [item, setItem] = useState<CoinsType[]>([])
    let [rate, setRate] = useState<number>(0)
    let [test, setTest] = useState<number>(0)

    const onClickSet = (coinID: string) => {

        coinCapAPI.coinFetching(coinID).then((res) => {

            console.log(res.data.data.priceUsd)
            setRate(res.data.data.priceUsd)
            setItem(res.data)
            setCoinID(coinID)

        })

    }
    const addBalance = (id: string, rate: number, exchange: number, value: number) => {
        let itemBalance: BillType = {coinID: id, rate: rate, exchange: exchange, valueChange: value}
        const test1 = bill.find(el => el.coinID === id)
        if (test1) {
            test1.exchange = exchange + test1.exchange

        } else {
            bill.push(itemBalance)

        }
        setTest(bill.reduce((acc, cerr) => {
            return acc += cerr.exchange
        }, 0))
        console.log(test)
    }
    const removeBill = (id: string) => {
        setBill(bill.filter((el) => el.coinID !== id))
        setTest(bill.reduce((acc, cerr) => {
            return acc += cerr.exchange
        }, 0))

    }
    useEffect(() => {

            setTest(bill.reduce((acc, err) => (acc += err.exchange), 0))
          localStorage.setItem('BillValue', JSON.stringify(bill))
        },

        [bill])

 useEffect(()=>{
let valueBill= localStorage.getItem('BillValue',)
     if (valueBill){
         let newValue = JSON.parse(valueBill)
         setBill(newValue)
     }
 },[])

        return <ModalContext.Provider
            value={{
                test,
                coinID,
                rate,
                value,
                bill,
                item,
                removeBill,
                addBalance,
                onClickSet
            }}>{children}</ModalContext.Provider>;
    };
    export default ModalProvider;

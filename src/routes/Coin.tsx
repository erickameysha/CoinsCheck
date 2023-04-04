import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import s from './Coin.module.scss'
import LineBarContainer, {ItemType} from "../components/LineComponent/LineBarContainer";
import Modal from "../components/Modal/Modal";
import {coinCapAPI} from "../api/coincap-api";
import {CoinItemContext, CoinItemContextType} from "../context/CoinItemContext";
// import ModalContext, {BillContextType} from "../context/ModalContext";
import ModalProvider, {BillContextType, ModalContext} from "../context/ModalContext";
import CoinContent from "./CoinContent/CoinContent";
import CoinContentButton from "../components/TableComponent/CoinContextButtons/CoinContentButton";


export const Coin = () => {

    const params = useParams()
    let {coinItem, getCoinItem,fetchCandies} = useContext(CoinItemContext) as CoinItemContextType
    let {onClickSet} = useContext(ModalContext) as BillContextType
    const [coinID, setCoinID] = useState<ItemType[]>([])
    const onClickHandler = (isOpen: boolean) => {
        setOpen(isOpen)
        onClickSet(coinItem.id)
        setOpen(isOpen)
    }
    useEffect(() => {
        if (params.coinID) {
            getCoinItem(params.coinID)
            fetchCandies(params.coinID)

        }

    }, [])
    if (coinID){

    }

    const [open, setOpen] = useState(false)

    return <div>
        <div className={s.coin_container}>
            <div className={s.coin}>
                <CoinContent coinItem={coinItem}/>
                <CoinContentButton onClickHandler={onClickHandler}/>
                <Modal show={open} click={onClickHandler} types={'convert'} coinID={params.coinID}/>

                <LineBarContainer coinID={params.coinID}/>
            </div>
        </div>
    </div>
};

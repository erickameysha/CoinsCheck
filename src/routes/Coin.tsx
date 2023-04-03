import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import s from './Coin.module.scss'
import FirstCandies from "../components/LineComponent/FirstCandies";
import Modal from "../components/Modal/Modal";
import {coinCapAPI} from "../api/coincap-api";


export const Coin = () => {

    const [open, setOpen] = useState(false)
    const [coin, setCoin] = useState<any>({})

    const params = useParams()
    useEffect(() => {
        coinCapAPI.coinFetching(params.coinID)
            .then((res) => {
                setCoin(res.data.data)
            })
    }, [])
    const onClickHandler = (isOpen: boolean) => {
        return setOpen(isOpen)
    }



    return <div>
        <div className={s.coin_container}>
            <div className={s.coin}>

            <div className={s.content}>

                    <div>
                        <div>
                            <div>{coin.name}({coin.symbol})</div>

                        </div>
                        <div>
                            <div>${Number(coin.priceUsd).toLocaleString('eng')}</div>
                            {coin.changePercent24Hr <= 0 ?
                                <div
                                    style={{color: 'red'}}>{Number(coin.changePercent24Hr).toLocaleString('eng')}%</div>
                                : <div
                                    style={{color: 'green'}}>{Number(coin.changePercent24Hr).toLocaleString('eng')}%</div>
                            }

                        </div>
                    </div>
                </div>

            <div>
                <div>
                <Link to={'/'}>
                    <button className={s.coinButton} onClick={() => onClickHandler(true)}>Back</button>
                </Link>
                <button className={s.coinButton} onClick={() => onClickHandler(true)}>Add</button>
                </div>
                <Modal show={open} click={onClickHandler} types={'convert'} coinID={params.coinID}/>

            <FirstCandies coinID={params.coinID}/>
            </div>
        </div>
        </div>
    </div>
};

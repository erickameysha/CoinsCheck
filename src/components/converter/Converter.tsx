import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {BillContextType, ModalContext} from "../../context/ModalContext";


const Converter = () => {

    let [value, setValue] = useState<number>(1)
    const {addBalance,rate, coinID}= useContext(ModalContext) as BillContextType


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (value < '0') {
        }
        setValue(Number(value))
    }
    const onClickHandler = (value: number, rate: number) => {

        let exchange = value * rate
        return addBalance(coinID, rate, exchange, value)

    }

    return (
        <div>
            <p>{coinID}: ${Number(value * rate).toLocaleString('eu-US').slice(0, 6)} </p>
            <input value={value} onChange={onChangeHandler} step={"0,1"} type={'number'}/>
            <button onClick={() => {
                onClickHandler(value, rate)
            }}>+
            </button>
        </div>
    );
};

export default Converter;
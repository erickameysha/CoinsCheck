import React, {ChangeEvent, useEffect, useState} from 'react';
import {AddItemForm} from "../../AddItemForm";
import axios from "axios";
import {number} from "prop-types";

type PropsType = {
    coinID: string | undefined
    setRate: (id: string | undefined, rate: number, exchange: number, value: number) => void
}
const Converter = (props: PropsType) => {
    let [rate, setRate] = useState<number>(0)
    let [value, setValue] = useState<number>(1)
    let [item, setItem] = useState<any>([])
    let [error, setError] = useState()

    console.log(props.coinID)
    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${props.coinID}`).then((res) => {
            console.log(res.data.data.priceUsd)
            setRate(res.data.data.priceUsd)
            setItem(res.data)

        })
    }, [])
    console.log(item)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (value < '0') {
        }

        setValue(Number(value))
    }
    const onClickHandler = (value: number, rate: number) => {
        console.log('click')
        let exchange = value * rate
        return props.setRate(props.coinID, rate, exchange, value)

    }

    return (
        <div>
            <p>{props.coinID}: ${Number(value * rate).toLocaleString('eu-US').slice(0, 6)} </p>
            <input value={value} onChange={onChangeHandler} step={"0,1"} type={'number'}/>
            <button onClick={() => {
                onClickHandler(value, rate)
                alert(value * rate)
            }}>+
            </button>
        </div>
    );
};

export default Converter;
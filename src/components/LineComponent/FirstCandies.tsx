import React, {useEffect, useState} from 'react';
import axios from "axios";
import {number} from "prop-types";
import LineBar from "./LineBar";


export type ItemType = {
    data: string
    priceUsd: string
    time: number
}
export type ResponseType = {
    data: Array<ItemType>
}
const FirstCandies = () => {
    const [data, setData] = useState<ResponseType| undefined>(undefined)
    const [active, setActive] = useState<ItemType[]>([])

    useEffect(() => {
        axios.get<ResponseType>('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1').then((res) => {

            // console.log('res ' + res)

            setData(res.data)
            setActive(res.data.data)
            // console.log(data)


        })
    }, [])
    console.log(data)


    return (
        <div>
<LineBar price={active}/>
        </div>
    );
};

export default FirstCandies;
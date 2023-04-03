import React, {useEffect, useState} from 'react';
import axios from "axios";
import {number} from "prop-types";
import LineBar from "./LineBar";
import {coinCapAPI} from "../../api/coincap-api";


export type ItemType = {
    data: string
    priceUsd: string
    time: number
}
export type ResponseType = {
    data: Array<ItemType>

}
type PropsType = {
    coinID: string | undefined
}
export const FirstCandies = (props: PropsType) => {
    const [data, setData] = useState<ResponseType | undefined>(undefined)
    const [active, setActive] = useState<ItemType[]>([])

    useEffect(() => {

        coinCapAPI.firstCandies(props.coinID)
            .then((res) => {

                setData(res.data)
                setActive(res.data.data)
            })
    }, [])


    return (
        <div>
            <LineBar coinID={props.coinID} price={active}/>
        </div>
    );
};

export default FirstCandies;
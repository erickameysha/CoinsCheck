import React, {useEffect, useState} from 'react';
import './Table.css'
import axios from "axios";
const Table = () => {
    const [coins, setCoins]= useState([])

    useEffect(()=>{
        const fetchCoins = async ()=> {
            // const res = await fetch(`https://api.coincap.io/v2/assets?limit=20`)
            // const data = await res.json()
            // console.log(data.data)
            // setCoins(data.data)

            axios.get(`https://api.coincap.io/v2/assets?limit=20`).then((res)=>{
                console.log(res)
                setCoins(res.data.data)
            })
        }
        fetchCoins()
    },[] )
    return (
        <section className={'coin'}>
            couns {coins.length}
            <table>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>name</th>
                    <th>Price(USD)</th>
                    <th>Change (24h)</th>
                </tr>
                </thead>
                <tbody>
                {coins.map(({id, name, rank,priceUsd, changePercent24Hr})=>{
                    return <tr key={id}>
                        <td>{rank}</td>
                        <td>{name}</td>
                        <td>
                            ${
                            parseFloat( priceUsd).toLocaleString()
                        }
                        </td>
                        <td>
                            {parseFloat(changePercent24Hr).toFixed(2)}
                        </td>
                    </tr>
                })}
                </tbody>
            </table>


            <div className="buttons">
                <button>Next</button>
                <button>Refresh</button>
            </div>
        </section>
    );
};

export default Table;
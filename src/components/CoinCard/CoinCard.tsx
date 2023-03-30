import React, {useEffect, useState} from 'react';
import s from './CoinCard.module.scss'
const CoinCard = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {

        const fetchCoins = async () => {
            const res = await fetch(`https://api.coincap.io/v2/assets?limit=1`)
            const data = await res.json()
            console.log(data.data)
            setCoins(data.data)
        }
        fetchCoins()
    }, [])
    return (
        <div>
            {coins.map(({id, name, rank, priceUsd, changePercent24Hr}) => {
                return <div className={s.Card} key={id}>
                    <div className={s.Card_item}>
                        <div>
                            <h1>{name}</h1>
                            <span> rank: {rank}</span>
                        </div>
                        <div>
                            <div>
                                <h1>$ {parseFloat( priceUsd).toFixed(1).slice(0,5)}</h1>
                            </div>
                            <div>
                                {  parseFloat( changePercent24Hr).toFixed(1).slice(0,4)}
                            </div>
                        </div>
                    </div>


                </div>
            })}

        </div>
    );
};

export default CoinCard;
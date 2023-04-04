import React from 'react';
import {Link} from "react-router-dom";
import s from "../../../routes/Coin.module.scss";

type PropsType ={
    onClickHandler:(onClick: true)=> void
}
const CoinContentButton = (props: PropsType) => {


     const onClickCallBack = () => {
       return   props.onClickHandler(true)
     }
    return (
        <div>
            <div>
                <Link to={'/'}>
                    <button className={s.coinButton}>Back</button>
                </Link>
                <button className={s.coinButton} onClick={onClickCallBack}>Add</button>
            </div>
        </div>
    );
};

export default CoinContentButton;
import React, {useContext, useEffect, useState} from 'react';
import s from './Header.module.scss'
import {AiOutlineUser, ImHome} from "react-icons/all";
import iconForm from '../../GlobalAssets/svg/home-svgrepo-com.svg'
import Modal from "../../components/Modal/Modal";
import {Link} from "react-router-dom";
import BillContext, {BillItemContext} from "../../context/context";
import {coinCapAPI} from "../../api/coincap-api";
import HeaderItem from "./HeaderItem/HeaderItem";
import {CoinsType} from "../TableComponent/Coins";

const Header = () => {

    const [show, isShow] = useState(false)
// const {data} =useContext<BillItemContext>(BillContext)
    const onClickHandler = (isOpen: boolean) => {
      return   isShow(isOpen)
    }

    return (
        <div>
        <div className={s.header}>
            <Link to={'/'}>
            <img className={s.header_img}  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/89MrW4Y3UxWqVAbJM2xfqy9uGNE7tMFT6uCtn6i2XH7x/logo.png" alt="CoinCheck"/>
            </Link>
             <div className={s.header_price}>
                 {

                 }
            </div>
            <div className={s.header_bill}>
                <div  onClick={e=>onClickHandler(true)}><img style={{maxWidth: 60}} src={iconForm} alt=""/></div>

            </div>

        </div> <Modal  click={ onClickHandler} types={'myBill'} show={show}/></div>
    );
};

export default Header;
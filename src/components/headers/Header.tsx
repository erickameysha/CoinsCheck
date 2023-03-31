import React, {useState} from 'react';
import s from './Header.module.scss'
import {AiOutlineUser, ImHome} from "react-icons/all";
import iconForm from '../../GlobalAssets/svg/home-svgrepo-com.svg'
import Modal from "../../components/Modal/Modal";
import {Link} from "react-router-dom";
const Header = () => {

    const [show, isShow] = useState(false)

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
                <div className={s.header_priceItem}>
                    BTC <span className={s.header_priceSubtitle} >+3%</span>
                </div>

                <div className={s.header_priceItem}>
                    ETR <span className={s.header_pricelower}>-0,2%</span>
                </div>
                <div className={s.header_priceItem}>
                    USDT <span className={s.header_priceSubtitle}>+1%</span>
                </div>
            </div>
            <div className={s.header_bill}>

               <div className={s.header_billTitle}>
                   my bill: $3
               </div>
                <div  onClick={e=>onClickHandler(true)}><img style={{maxWidth: 60}} src={iconForm} alt=""/></div>

            </div>

        </div> <Modal click={ onClickHandler} show={show}/></div>
    );
};

export default Header;
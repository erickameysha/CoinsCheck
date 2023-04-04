import React, {useContext} from 'react';
import BillContext, {BillItemContext} from "../../context/context";
import {BillContextType, ModalContext} from "../../context/ModalContext";

type PropsType = {
    coinID: string
    exchange: number
}
const Bill = (props: PropsType) => {

    const {removeBill}= useContext(ModalContext) as BillContextType

    return (


                <div>
                    <div>coin: {props.coinID}</div>
                    <div>${Math.round(props.exchange).toLocaleString(('eng')
                    )}</div>
                    <button onClick={()=> removeBill(props.coinID)}>+
                    </button>
                </div>

    );
};

export default Bill;
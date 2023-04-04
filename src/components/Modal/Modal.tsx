import React, {useContext, useState} from 'react';
import s from './Modal.module.scss'
import Converter from "../converter/Converter";
import Bill from "../Bill/Bill";
import {BillContextType, ModalContext} from "../../context/ModalContext";


type ModuleType = 'convert' | 'myBill'
type ModalPropsType = {
    show: boolean
    click: (isOpen: boolean) => void
    types?: ModuleType
    coinID?: string

}

const Modal = (props: ModalPropsType) => {
          let {bill} = useContext(ModalContext) as BillContextType

        if (!props.show) {
            return null
        }

        return (
            <div className={s.modal} onClick={() => props.click(false)}>
                <div className={s.modal_context} onClick={e => e.stopPropagation()}>
                    <div className={s.modal_body}>

                        {

                            props.types === 'convert' ?
                                <Converter
                                  /> : <div>
                                    {bill.map((el) => {
                                        return <Bill
                                            key={el.coinID}
                                            coinID={el.coinID}
                                            exchange={el.exchange}
                                        />
                                    })}
                                </div>
                        }


                    </div>
                    <div className={s.modal_footer}>
                        <button onClick={() => props.click(false)} className={s.button}>
                            close
                        </button>
                    </div>
                </div>


            </div>
        );
    };

export default Modal;
import React, {useContext, useState} from 'react';
import s from './Modal.module.scss'
import {EditableSpan} from "../../EditableSpan";
import {AddItemForm} from "../../AddItemForm";
import Converter from "../converter/Converter";
import BillContext, {BillItemContext, initState} from "../../context/context";
import Bill from "../Bill/Bill";


type ModuleType = 'convert' | 'myBill'
type ModalPropsType = {
    show: boolean
    click: (isOpen: boolean) => void
    types?: ModuleType
    coinID?: string | undefined
    //deleteHandler?:(deleteBill: string|undefined) => void
    // coins: test
}
export type test = {
    coinID: string | undefined, rate: number, exchange: number, valueChange: number
}

const
    Modal = (props: ModalPropsType) => {
        let {data, deleteData} = useContext<BillItemContext>(BillContext)

        const setRateHandle = (id: string | undefined, rate: number, exchange: number, value: number) => {
            let item: test = {coinID: id, rate: rate, exchange: exchange, valueChange: value}
            const test1 = data.find(el => el.coinID === id)
            if (test1) {
                test1.exchange = exchange + test1.exchange

            } else {
                data.push(item)
            }
            localStorage.setItem('BillValue', JSON.stringify(data))

        }


        if (!props.show) {
            return null
        }
        return (
            <div className={s.modal} onClick={() => props.click(false)}>
                <div className={s.modal_context} onClick={e => e.stopPropagation()}>
                    <div className={s.modal_header}>

                    </div>
                    <div className={s.modal_body}>

                        {

                            props.types === 'convert' ?
                                <Converter

                                    setRate={setRateHandle}
                                    coinID={props.coinID}/> : <div>
                                    {data.map((el) => {
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
import React, {useState} from 'react';
import s from './Modal.module.scss'
import {EditableSpan} from "../../EditableSpan";


type ModalPropsType = {
    show: boolean
    click: (isOpen: boolean) => void
}
const Modal = (props: ModalPropsType) => {


    if (!props.show) {
        return null
    }
    return (
        <div className={s.modal} onClick={() => props.click(false)}>
            <div className={s.modal_context} onClick={e => e.stopPropagation()}>
                <div className={s.modal_header}>
                    <h4 className={s.modal_title}>
                        тут будет отрисовка кошелька
                    </h4>
                </div>
                <div className={s.modal_body}>

                    <div className={s.modal_bodyItem}>
                        <div className={s.modal_bodyItemTitle}>
                            BTC:
                        </div>
                        <EditableSpan value={'2$'} onChange={() => {
                        }}/>
                    </div>
                    <div className={s.modal_bodyItem}>
                        <div className={s.modal_bodyItemTitle}>
                            B2:
                        </div>
                        <EditableSpan value={'2$'} onChange={() => {
                        }}/>
                    </div>

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
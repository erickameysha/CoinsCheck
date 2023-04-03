import React, {useContext} from 'react';
import BillContext, {BillItemContext} from "../../context/context";

type PropsType = {
    coinID: string |undefined
    exchange: number
    // removeBill:(id: string)=> void
    // deleteItem: (deleteBill: (string|undefined))=> void
    // deleteHandler?:(deleteBill: string|undefined) => void
}
const Bill = (props: PropsType) => {
    let {deleteData, data}= useContext<BillItemContext>(BillContext)
    const removeBill = (id: string | undefined) => {
        deleteData = id
    }
    return (
        <BillContext.Consumer >
            {deleteData=>
                <div>
                    <div>coin: {props.coinID}</div>
                    <div>${Math.round(props.exchange).toLocaleString(('eng')
                    )}</div>
                    <button onClick={
                        ()=>removeBill(props.coinID)
                    }>+
                    </button>
                </div>
            }
        </BillContext.Consumer>

    );
};

export default Bill;
import {createContext} from "react";

import {string} from "prop-types";
export type newRate = {
    coinID: string , rate: number, exchange: number, valueChange: number, newRate: number,  newValue: number
}

export interface BillItemContext {
    // data: test[],
    deleteItem?:string|undefined
    deleteData?:string
}

export const initState ={
   // / data: [],
    deleteData: ''

}
const BillContext = createContext<BillItemContext>(initState)

export default  BillContext
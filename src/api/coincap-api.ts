import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://api.coincap.io/v2/',

})

type firstCandiesType={
    coinID: string
}

export const coinCapAPI = {
    getCoins(limit: string) {
        return instanse.get(`assets?limit=${limit}`)
    },
    firstCandies<firstCandiesType>(coinID: string | undefined){
    return instanse.get(`assets/${coinID}/history?interval=d1`)
    },
    coinFetching(coinID: string | undefined){
        return instanse.get(`assets/${coinID}` )
    }
}

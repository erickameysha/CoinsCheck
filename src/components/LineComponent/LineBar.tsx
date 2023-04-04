import React from 'react';
import {Bar, Line} from "react-chartjs-2";
import {CategoryScale, Chart} from "chart.js";
import {registerables} from 'chart.js';
import {ItemType, ResponseType} from "./LineBarContainer";

Chart.register(...registerables);
Chart.register(CategoryScale);

type PropsType = {
    price: ItemType[]
    coinID: string|undefined
}
const LineBar = (props: PropsType) => {
    const createAllData = () => {
        const labels: string[] = []
        const data: string[] = []
        props.price.forEach((line) => {
            data.push(String(line.time).slice(0,4))
            labels.push(line.priceUsd)
        })
        return {
            labels: data,
            datasets:[
            {
             label: props.coinID,
                data: labels,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",

            },
        ]
        };
    }

    return (
        <div>
            <Line

                data={createAllData()}

            />
        </div>
    );
};

export default LineBar;
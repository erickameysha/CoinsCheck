import React from 'react';
import {Bar, Line} from "react-chartjs-2";
import {CategoryScale, Chart} from "chart.js";
import {registerables} from 'chart.js';
import {ItemType, ResponseType} from "./FirstCandies";

Chart.register(...registerables);
Chart.register(CategoryScale);

type PropsType = {
    price: ItemType[]
    coinID: string| undefined
}
const LineBar = (props: PropsType) => {
    const createAllData = () => {
        const data: string[] = []
        const labels: string[] = []
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

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    return (
        <div>
            <Line

                data={createAllData()}

            />
        </div>
    );
};

export default LineBar;
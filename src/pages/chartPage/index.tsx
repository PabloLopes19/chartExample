import { useState } from "react";
import * as s from "./styles";

interface props {}

import ReactEcharts from "echarts-for-react";

import chartData from "../../data/fakeChartData.json";
import chartData2 from "../../data/fakeChartData2.json";

export default function ChartPage(props: props) {
    const [data, setData] = useState(chartData);

    const events = data.map((item) => item.nomeEvento);
    const dataArr = data.map(item => ( { name: item.nomeEvento, value: item.quantidadeLocalDeProva } ))

    const pieOption = {
        legend: {
          orient: "vertical",
          left: "left",
          data: events
        },
        series: [{
            legendHoverLink: false,
            type: "pie",
            data: dataArr
        }]
    }

    const lineOption = {
        xAxis: {
          type: "category",
          data: events
        },
        yAxis: {},
        series: [{
          data: dataArr,
          type: "line"
        }]
      }

    const barOption = {
        tooltip: {},
        legend: {},
        xAxis: {
          data: events
        },
        yAxis: {},
        series: [
          // {
          //   name: "> 100",
          //   type: "bar",
          //   data: dataArr
          // },
          {
            name: "Datas das provas",
            type: "bar",
            data: dataArr
          }
        ]
      }

    return (
        <s.Container>
            <s.Title>
                Testando gráficos
            </s.Title>

            <button 
                onClick={() => setData(data === chartData ? chartData2 : chartData)}
            >
                Mudar dados
            </button>

            <ReactEcharts 
                className="chart" 
                option={pieOption} 
            />

            <ReactEcharts 
                className="chart" 
                option={lineOption} 
            />

            <ReactEcharts 
                className="chart" 
                option={barOption} 
            />

            {/* <Chart 
                title="Evento 1"
                data={{}}
            /> */}
        </s.Container>
    )
}
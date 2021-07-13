import ChartBar from './ChartBar'

import './Chart.css'

const Chart = (props) => {
    // Extracting only the values as an array
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // Spreading the array to individual numbers
    const maxValue = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={maxValue} 
                label={dataPoint.label}/>
            )}
        </div>
    )
}

export default Chart
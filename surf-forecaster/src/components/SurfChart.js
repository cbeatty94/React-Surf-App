import { Line } from 'react-chartjs-2'

const data = {
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    datasets: [{
        // this is where I need to update the code to be responsive once I connect to surfline
        label: 'Primary Swell',
        data: [2, 3, 2, 5, 4, 5, 7, 6],
        backgroundColor: "lightblue",
        borderColor: 'lightblue',
        pointBackgroundColor: 'darkblue',
        pointBorderColor: 'darkblue',
        tension: 0.3,
    },
    {
        label: 'Secondary Swell',
        data: [3, 4, 3, 6, 5, 6, 8, 7],
        backgroundColor: "violet",
        borderColor: 'violet',
        pointBackgroundColor: 'purple',
        pointBorderColor: 'purple',
        tension: 0.3,

    }]
};

const options = {
    scales: {
        y: {
            max: 10,
            min: 0,
            ticks: {
                beginAtZero: true,
                stepSize: 1,
                callback: function(value, index, values) {
                    return value + ' ft';
                }
            }
        }  
      },
}

function SurfChart() {
        return (
            <div className="chartContainer">
                <h1 style={{ textAlign: 'center' }}>Mission Beach Forecast</h1>
                <div className="chart">
                    <div style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        )
    }

export default SurfChart

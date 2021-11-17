import Card from 'react-bootstrap/Card'
import '../App.css'

function Weather() {
    
    return (
        <Card className='mx-auto' style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title className='cardTitle'>San Diego, CA</Card.Title>
                <Card.Subtitle className="mb-2 text-muted cardTitle">Current Weather</Card.Subtitle>
                <Card.Text>
                This is where the current weather for San Diego will go once I connec the API.
                </Card.Text>
                <Card.Link  href="#">Full Forecast</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Weather













    
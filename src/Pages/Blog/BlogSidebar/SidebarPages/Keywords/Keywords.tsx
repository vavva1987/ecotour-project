import { Button, Container } from '@mui/material'
import './Keywords.scss'

type Props = {}

const Keywords = (props: Props) => {
    return (
        <Container className="keywords" disableGutters={true}>
            <div>
                <h3>Keywords</h3>
            </div>
            <div className="keywords-btn">
                <Button variant="outlined">Water</Button>
                <Button variant="outlined">Children</Button>
            </div>
            <div className="keywords-btn">
                <Button variant="outlined">Environment</Button>
                <Button variant="outlined">Tourism</Button>
            </div>
        </Container>
    )
}

export default Keywords

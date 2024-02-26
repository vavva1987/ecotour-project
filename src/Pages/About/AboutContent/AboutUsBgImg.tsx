import { Container } from '@mui/material'
import '../About.scss'

type Props = {}

const AboutUsBgImg = (props: Props) => {
    return (
        <Container
            className="about-us-bg"
            sx={{
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="about-us-bg-title">
                <h2>About Us</h2>
            </div>
        </Container>
    )
}

export default AboutUsBgImg

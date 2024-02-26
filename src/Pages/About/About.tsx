import { Container } from '@mui/material'
import AboutUsBgImg from './AboutContent/AboutUsBgImg'
import './About.scss'

type Props = {}

const About = (props: Props) => {
    return (
        <Container sx={{ marginTop: '50px' }}>
            <AboutUsBgImg />
        </Container>
    )
}

export default About

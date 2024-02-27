import { Container } from '@mui/material'
import AboutUsBgImg from './AboutContent/AboutUsBgImg'
import './About.scss'
import AboutUsTitle from './AboutContent/AboutUsTitle'

type Props = {}

const About = (props: Props) => {
    return (
        <Container sx={{ marginTop: '50px' }}>
            <AboutUsBgImg />
            <AboutUsTitle />
        </Container>
    )
}

export default About
